const pg = require('pg');
// const client = new pg.Client('postgres://localhost/wnews');
const client = new pg.Client({
  host: 'localhost',
  port: 5432,
  database: 'runningsongs',
  user: 'postgres',
  password: 'FSA123',
});

client.connect();
console.log("CONNECTED", client)
module.exports = client;