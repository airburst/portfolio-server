import dotenv from 'dotenv';
import TaskQueue from './TaskQueue';

dotenv.config();

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

// eslint-disable-next-line max-len
const ERROR = 'There is a problem fetching data. Please try again, or contact the support team if this issue persists.';

export const connected = (conn, key) => conn.has(key);

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const castToNumber = (text) => {
  const num = parseInt(text, 10);
  return isNaN(num) ? text : num;
};

const numericSort = (list) => {
  const stubs = list.map(text => ([castToNumber(text), text]));
  const sorted = stubs.sort((a, b) => a[0] - b[0]);
  return sorted.map(n => n[1]);
};

// Fetch batch of requests in limited parallel sequence
export const getBatch = concurrency =>
  async (ids, action, count = 0) => {
    const downloadQueue = new TaskQueue(limitConcurrency(concurrency));
    await new Promise((resolve, reject) => {
      let completed = 0;
      let errored = false;
      ids.forEach((id) => {
        const task = () => action && action(id, count)
          .then(() => {
            completed += 1;
            if (completed === ids.length) {
              resolve();
            }
          })
          .catch(() => {
            if (!errored) {
              errored = true;
              downloadQueue.empty();
              reject(new Error(ERROR));
            }
          });
        downloadQueue.pushTask(task);
      });
    });
  };

// Fetch batch of requests in limited parallel sequence
export const getBatchWithReturn = concurrency =>
  async (ids, action, count = 0) => {
    const downloadQueue = new TaskQueue(limitConcurrency(concurrency));
    const batchResults = [];
    await new Promise((resolve, reject) => {
      let completed = 0;
      let errored = false;
      ids.forEach((id) => {
        const task = () => action(id, count)
          .then((result) => {
            batchResults.push(result);
            completed += 1;
            if (completed === ids.length) {
              resolve();
            }
          })
          .catch(() => {
            if (!errored) {
              errored = true;
              downloadQueue.empty();
              reject(new Error(ERROR));
            }
          });
        downloadQueue.pushTask(task);
      });
    });
    return batchResults;
  };

// Upload requests in strict sequence with concurrency of one
export const uploadBatch = concurrency =>
  async (records, action, params) => {
    const queue = new TaskQueue(limitConcurrency(concurrency));
    const batchResults = [];
    let result;
    const sortedRecords = numericSort(records);

    await new Promise((resolve, reject) => {
      if (!records || records.length === 0) { resolve(batchResults); }

      let completed = 0;
      const increment = () => {
        completed += 1;
        if (completed === records.length) { resolve(batchResults); }
      };

      sortedRecords.forEach((record) => {
        const task = async () => {
          try {
            result = await action(record, params);
            if (result) { batchResults.push(result); }
            increment();
          } catch (err) {
            increment();
            // reject here to stop the batch on a general error
            queue.empty();
            reject(Error(`Batch upload failed: ${err.message}`));
          }
        };
        queue.pushTask(task);
      });
    });
    return batchResults;
  };

export const uploadBatchSingle = () => uploadBatch(1);

export class Total {
  constructor(value) {
    this.value = value;
  }

  decrease(value = 1) {
    this.value -= value;
  }
}
