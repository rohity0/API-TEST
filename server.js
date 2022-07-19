const jsonServer = require("json-server")
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;
require('dotenv').config()
const server = jsonServer.create() ;
const router = jsonServer.router('db.json');
server.use(middlewares) ;
server.use(router);
server.listen (port, console.log(`listning on ${port}`));
