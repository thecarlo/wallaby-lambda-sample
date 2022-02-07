import { withMiddleware } from 'withMiddleware';

import { AwsLambdaContext } from '@interfaces/events/awsLambdaContext';
import { Payload } from '@interfaces/events/payload';
import { yourDescriptiveListener } from '@services/yourDescriptiveListener';

const yourDescriptiveHandler = async (
  payload: Payload,
  context: AwsLambdaContext,
): Promise<void> => {
  try {
    const yourDescriptiveEmitPayload = await yourDescriptiveListener(payload);

    context.succeed(yourDescriptiveEmitPayload);
  } catch (error) {
    console.log(error);

    context.fail(error);
  }
};

const handler = withMiddleware(yourDescriptiveHandler, []);

export { handler };
