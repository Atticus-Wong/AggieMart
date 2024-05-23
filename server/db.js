import sql from 'mssql'
import dotenv from 'dotenv'

dotenv.config();
const config = {
  user: process.env.VITE_DB_USER,
  password: process.env.VITE_DB_PASS,
  server: process.env.VITE_DB_SERVER,
  port: 1433,
  database: process.env.VITE_DB_NAME,
  authentication: {
    type: 'default'
  },
  options: {
    encrypt: true
  }
};

function SqlConnect() {
  sql.connect(config, err => {
    if (err) {
      throw err;
    }
    console.log("Connection Successful!");
  });
}

async function connectAndQuery() {
  try {
    SqlConnect();
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

export {
  SqlConnect,
  config,
  connectAndQuery
}
