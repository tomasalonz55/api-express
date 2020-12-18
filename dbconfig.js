require('dotenv').config()

const config = {
  user: process.env.DBUSER,
  password: process.env.PASSWORD,
  server: process.env.SERVER,
  database: process.env.DATABASE,
  options: {
    trustedconnection: false,
    enableArithAbort: true,
    instancename: process.env.INSTANCENAME,
    encrypt: false,
  },
  port: parseInt(process.env.PORTSERVER, 10),
};

module.exports = config;
