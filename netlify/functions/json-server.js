const jsonServer = require('json-server');
const path = require('path');

// Create JSON Server instance
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../../jobs.json')); // Path to your db.json file
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, CORS, etc)
server.use(middlewares);
server.use(router);

// Export the handler for Netlify functions
exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    server(event, context, (response) => {
      resolve({
        statusCode: 200,
        body: JSON.stringify(response),
        headers: {
          'Access-Control-Allow-Origin': '*', // Allow CORS for all domains
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Accept, Authorization'
        }
      });
    });
  });
};
