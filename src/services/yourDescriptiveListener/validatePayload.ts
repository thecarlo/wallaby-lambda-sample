import { Payload } from '@interfaces/events/payload';

export const validatePayload = (payload: Payload): void => {
  if (!payload.body) {
    throw new Error('Body is missing in payload');
  }
};
