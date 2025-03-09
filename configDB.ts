import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "127.0.0.1", 
    user: "Eduardo",  
    password: "123456",  
    database: "productos", 
});

export default connection;