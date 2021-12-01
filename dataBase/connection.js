const mysql = require('mysql');

const configConn = {
        host: "localhost",
        port: 3306,
        user: 'root',
        password: 'sinqia123',
        database: 'testenode'
    }
const conn = mysql.createConnection(
    configConn
);

module.exports = conn;