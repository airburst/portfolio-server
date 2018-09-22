import TaskQueue from './TaskQueue';
import { BATCH_CONCURRENCY } from '../constants';

const limitConcurrency = (con) => {
  if (!con) { return BATCH_CONCURRENCY; }
  if ((typeof con !== 'number') || con < 1) {
    return 1;
  }
  if (con > BATCH_CONCURRENCY) {
    return BATCH_CONCURRENCY;
  }
  return con;
};

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default concurrency =>
  async (records, resolver, params, sizes = []) => {
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

      records.forEach((record, i) => {
        const task = async () => {
          try {
            // Resolver signature is (parent, args, context)
            const { parent, argName, context } = params;
            const size = sizes ? sizes[i] : null; // Upload size for photos
            const args = { [argName]: record, size };
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
