import sql from 'mssql'

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
connectAndQuery();


async function connectAndQuery() {
  try {
      var poolConnection = await sql.connect(config);

      console.log("Inserting a new row into the accounts table...");
      await poolConnection.request().query(`
          INSERT INTO accounts (first_name, last_name, email, phone_number, location, password) 
          VALUES ('test_first_t', 'test_last_t', 'test@gmail.com', '1234567890', 'Davis', 'password')
      `);

      console.log("Row inserted successfully.");

      // Close the connection
      await poolConnection.close();
  } catch (err) {
      console.log("test");
      console.error("Error:", err.message);
  }
}
