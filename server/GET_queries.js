import { SqlConnect, config } from './db.js'
import sql from 'mssql'

async function GetXTenItems(x, y) {
  SqlConnect();
  var poolConnections = sql.connect(config);

  const resultSet = await poolConnections.request().query(`
    SELECT * FROM LISTINGS
    WHERE
    list_id BETWEEN
    ${x} AND ${y}
  `);

  return resultSet;
}

async function nextTenItems(x, y) {
  return GetXTenItems(x + 10, y + 10);
}

async function GetDescriptionObject(id) {

  SqlConnect();
  var poolConnections = sql.connect(config);

  const resultSet = await poolConnections.request().query(`
    SELECT * FROM DETAILS 
    WHERE 
    list_id = ${id}
  `);

  return resultSet;
}

export {
  GetXTenItems,
  GetDescriptionObject,
  nextTenItems
}

