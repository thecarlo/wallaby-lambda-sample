/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */

export const withMiddleware =
  (handler: Function, middleware: Array<Function> = []) =>
  (event, context, callback?: Function): Function => {
    const chainMiddleware = ([
      firstMiddleware,
      ...restOfMiddleware
    ]: Array<Function>) => {
      if (firstMiddleware) {
        return (event, context): Promise<Function> => {
          try {
            return firstMiddleware(
              event,
              context,
              chainMiddleware(restOfMiddleware),
            );
          } catch (error) {
            console.log(error);

            return Promise.reject(error);
          }
        };
      }

      return handler;
    };

    if (!callback) {
      return chainMiddleware(middleware)(event, context);
    }

    chainMiddleware(middleware)(event, context)
      .then((result) => callback(null, result))
      .catch((error) => {
        callback(error, null);
      });
  };
