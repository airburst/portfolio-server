import TaskQueue from './TaskQueue';

const BATCH_SIZE = process.env.BATCH_SIZE || 5;

const limitConcurrency = (con) => {
  if (!con) { return BATCH_SIZE; }
  if ((typeof con !== 'number') || con < 1) {
    return 1;
  }
  if (con > BATCH_SIZE) {
    return BATCH_SIZE;
  }
  return con;
};

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default concurrency =>
  async (records, resolver, params) => {
    const queue = new TaskQueue(limitConcurrency(concurrency));
    const batchResults = [];
    let result;

    await new Promise((resolve, reject) => {
      if (!records || records.length === 0) { resolve(batchResults); }

      let completed = 0;
      const increment = () => {
        completed += 1;
        if (completed === records.length) { resolve(batchResults); }
      };

      records.forEach((record) => {
        const task = async () => {
          try {
            // Resolver signature is (parent, args, context)
            const { parent, argName, context } = params;
            const args = { [argName]: record };
            result = await resolver(parent, args, context);
            if (result) { batchResults.push(result); }
            increment();
          } catch (err) {
            increment();
            queue.empty();
            // reject here to stop the batch on a general error
            reject(Error(`Batch upload failed: ${err.message}`));
          }
        };
        queue.pushTask(task);
      });
    });
    return batchResults;
  };
