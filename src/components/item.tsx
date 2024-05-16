import sql from 'mssql'
import dotenv from 'dotenv'
import app from 'express'

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


