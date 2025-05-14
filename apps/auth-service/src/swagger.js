const swaggerAutogen = require('swagger-autogen')();


const doc = {
  info: {
    title: 'My API',
    description: 'Description'
  },
  host: 'localhost:6001'
};

const outputFile = './swagger-output.json';
const routes = ['./main.ts'];


swaggerAutogen(outputFile, routes, doc);