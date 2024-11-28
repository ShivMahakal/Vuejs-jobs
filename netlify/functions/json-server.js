const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('jobs.json'); // Your mock data file (ensure it's included in the build)

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

exports.handler = async (event, context) => {
  // Return the API response
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'API is running!' }),
  };
};
