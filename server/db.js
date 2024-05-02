import sql from 'mssql'
import dot from 'dotenv'
import app from 'express'
import dotex from 'dotenv'

const config = {
  user: 'AtticusWong',
  password: '2653BinaryOnly', 
  server: 'mysqlserver2653.database.windows.net', 
  port: 1433, 
  database: 'GDSC', 
  authentication: {
      type: 'default'
  },
  options: {
      encrypt: true
  }
};

console.log("Starting...");
sql.connect(config, err => {
  if (err) {
      throw err;
  }
  console.log("Connection Successful!");
});
connectAndQuery();

async function connectAndQuery() {
    try {
        var poolConnection = await sql.connect(config);

        console.log("Reading rows from the Table...");
        var resultSet = await poolConnection.request().query(`SELECT * FROM accounts`);

        console.log(`${resultSet.recordset.length} rows returned.`);

        // output column headers
        var columns = "";
        for (var column in resultSet.recordset.columns) {
            columns += column + ", ";
        }
        console.log("%s\t", columns.substring(0, columns.length - 2));

        // ouput row contents from default record set
        resultSet.recordset.forEach(row => {
            console.log("%s\t%s", row.id, row.first_name, row.last_name, row.email, row.phone_number, row.location, row.password);
        });

        // close connection only when we're certain application is finished
        poolConnection.close();
    } catch (err) {
        console.error(err.message);
    }
}