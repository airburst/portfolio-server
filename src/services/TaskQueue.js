class TaskQueue {
  constructor(concurrency = 1) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
  }

  pushTask(task) {
    this.queue.push(task);
    this.next();
  }

  next() {
    while (this.running < this.concurrency && this.queue.length) {
      const task = this.queue.shift();
      // task(() => {
      task().then(() => {
        this.running -= 1;
        this.next();
      });
      this.running += 1;
    }
  }

  empty() {
    this.queue = [];
  }
}

export default TaskQueue;
