const errorHandler: PagesFunction = async (context) => {
  try {
    return await context.next();
  } catch (err) {
    return new Response(`${(err as Error).message}\n${(err as Error).stack}`, {
      status: 500,
    });
  }
};

const hello: PagesFunction = async (context) => {
  const response = await context.next();
  response.headers.set("X-Hello", "Hello from functions Middleware!");
  return response;
};

export const onRequest = [errorHandler, hello];
