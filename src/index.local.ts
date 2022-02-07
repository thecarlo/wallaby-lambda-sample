import payload from '@fixtures/payload.json';

import { handler } from './index';

const context = {
  succeed: (response) => {
    return response;
  },
  fail: () => {
    return 'Failed';
  },
};

handler(payload, context);
