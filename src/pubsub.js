import { PubSub } from 'apollo-server';

const pubsub = new PubSub();
export default pubsub;

export const UPLOAD_STARTED = 'UPLOAD_STARTED';
export const UPLOAD_PROGRESS = 'UPLOAD_PROGRESS';

export const emitUploadStarted = filename =>
  pubsub.publish(UPLOAD_STARTED, {
    uploadStarted: filename,
  });

export const emitUploadProgress = (filename, percentage) =>
  pubsub.publish(UPLOAD_PROGRESS, {
    uploadProgress: { filename, percentage },
  });
