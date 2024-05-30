import { SqlConnect, config } from './db.js'
import sql from 'mssql'

async function GetXTenItems(x, y) {
  try {
    SqlConnect();
    var poolConnections = sql.connect(config);

    const resultSet = await poolConnections.request().query(`
    SELECT * FROM LISTINGS
    WHERE
    list_id BETWEEN
    ${x} AND ${y}
  `);

    return resultSet;
  } catch (e) {
    console.error(e);
  }
}

async function nextTenItems(x, y) {
  return GetXTenItems(x + 10, y + 10);
}

async function GetDescriptionObject(id) {
  try {
    SqlConnect();
    var poolConnections = sql.connect(config);

    const resultSet = await poolConnections.request().query(`
    SELECT * FROM DETAILS 
    WHERE 
    list_id = ${id}
  `);
    return resultSet;
  } catch (e) {
    console.error(e);
  }
}
async function GetOneUserQueries(id) {
  try {
    SqlConnect();
    var poolConnections = sql.connect(config);

    const resultSet = await poolConnections.request().query(`
    SELECT * FROM LISTINGS
    WHERE
    user_id = ${id}
  `)
    return resultSet;
  } catch (e) {
    console.error(e);
  }
}
export {
  GetXTenItems,
  GetDescriptionObject,
  nextTenItems,
  GetOneUserQueries
}

