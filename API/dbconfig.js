const config = {
  user: 'sa',
  password: '123456', // TODO: Change to my own password
  server: 'localhost',
  database: 'Academic',
  options: {
    trustedConnection: true,
    enableArithAbort: true,
    instanceName: 'SQLEXPRESS', // TODO: Change to my own instance name
  },
  port: 51688,  // TODO: Change my own port

}

module.exports = config;