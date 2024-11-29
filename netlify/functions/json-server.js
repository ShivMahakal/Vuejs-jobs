const jsonServer = require('json-server');
const path = require('path');

// Use JSON Server router directly
const router = jsonServer.router(path.join(__dirname, '../../jobs.json')); // Path to your db.json file
const middlewares = jsonServer.defaults();

// Create a function handler
exports.handler = async (event, context) => {
  const server = jsonServer.create();

  // Set up middleware and router
  server.use(middlewares);
  server.use(router);

  // Since Netlify is running in a serverless environment, we need to handle the request manually.
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
