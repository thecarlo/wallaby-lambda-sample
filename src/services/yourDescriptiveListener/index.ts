import axios from 'axios';

import { Payload } from '@interfaces/events/payload';
import { YourDescriptiveEmitPayload } from '@interfaces/samples/yourDescriptiveEmitPayload';

import { validatePayload } from './validatePayload';

export const yourDescriptiveListener = async (
  kongPayload: Payload,
  // eslint-disable-next-line require-await
): Promise<YourDescriptiveEmitPayload> => {
  validatePayload(kongPayload);

  const axiosResponse = await axios.request<YourDescriptiveEmitPayload>({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts/1',
  });

  const postResponse = axiosResponse.data;

  return postResponse;
};
