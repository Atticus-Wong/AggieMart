import sql from 'mssql'
import dotenv from 'dotenv'
import { config, SqlConnect } from './db.js';

dotenv.config();

async function InsertUserQuery(first_name, last_name, email, number, location, password) {
  try {
    SqlConnect();
    var poolConnection = sql.connect(config);

    console.log("Inserting a new row into the accounts table...");
    var resultSet = await poolConnection.request().query(`
          INSERT INTO accounts (first_name, last_name, email, phone_number, location, password) 
          VALUES ('${first_name}', '${last_name}', '${email}', '${number}', '${location}', '${password}')
      `);

    console.log("Row inserted successfully.");

    // Close the connection
    await poolConnection.close();
  } catch (err) {
    console.error("Error:", err.message);
  }
  return resultSet;
}

async function InsertItemQuery(name, price, location) {
  try {
    SqlConnect();
    var poolConnection = sql.connect(config);

    console.log("Inserting a new row into the accounts table...");
    var resultSet = await poolConnection.request().query(`
          INSERT INTO listings (name, price, location) 
          VALUES ('${name}', '${price}', '${location}')
      `);

    console.log("Row inserted successfully.");

    // Close the connection
    await poolConnection.close();
  } catch (err) {
    console.error("Error:", err.message);
  }
  return resultSet;
}

async function InsertDescriptionQuery(description, img1, img2, img3, img4, img5, img6) {
  try {
    SqlConnect();
    var poolConnection = sql.connect(config);

    var resultSet = await poolConnection.request().query(`
      INSERT INTO details 
      VALUES ('${description}', )
    `);
  }
  catch (err) {
    throw err;
  }

  return resultSet;
}

export {
  InsertUserQuery,
  InsertItemQuery,
  InsertDescriptionQuery
}
