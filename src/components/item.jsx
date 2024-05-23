import sql from 'mssql'
import dotenv from 'dotenv'
import app from 'express'
import { config, connectAndQuery } from '../../server/config/db.js'

async function runDB(name, phone_number, price) {

  console.log("Starting...");
  sql.connect(config, err => {
    if (err) {
      throw err;
    }
    console.log("Connection Successful!");
  });

}
export const createItem = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [price, setPrice] = useState("");

  return (
    <>

    </>
  );
}

