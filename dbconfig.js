require('dotenv').config()

const config = {
  user: process.env.DBUSER,
  password: process.env.PASSWORD,
  server: process.env.SERVER,
  database: process.env.DATABASE,
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: process.env.INSTANCENAME,
    encrypt: false,
  },
  port: 49771,
};

module.exports = config;
