import { GetDescriptionObject, GetOneUserQueries } from './GET_queries.js'
import { InsertUserQuery, InsertItemQuery, InsertDescriptionQuery } from './INSERT_QUERY.js'
import express from 'express'

const app = express();

app.post('/insertItemQuery', async (req) => {
  try {
    const { insertQuery } = req.body;
    InsertItemQuery(insertQuery.name, insertQuery.price, insertQuery.location);
  } catch (e) {
    console.error(e);
  }
});
app.post('/insertUsermQuery', async (req) => {
  try {
    const { insertQuery } = req.body;
    InsertUserQuery(insertQuery.first_name, insertQuery.last_name, insertQuery.email, insertQuery.number, insertQuery.location, insertQuery.password);
  } catch (e) {
    console.error(e);
  }
});
app.post('/getQueries', async (req, res) => {
  try {
    const { getQuery } = req.body;
    console.log(getQuery)
    const resultSet = await GetOneUserQueries();
    res.json({ resultSet });
  }
  catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/description', async (req, res) => {
  try {
    const { getQuery } = req.body;
    console.log(getQuery)
    const resultSet = await GetDescriptionObject(1);
    res.json({ resultSet });
  }
  catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})
