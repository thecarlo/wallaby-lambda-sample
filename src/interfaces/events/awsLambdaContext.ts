/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AwsLambdaContext {
  done?(error?: Error, result?: any): void;
  fail(error: Error | string): void;
  succeed(messageOrObject: any): void;
  succeed(message: string, object: any): void;
}
