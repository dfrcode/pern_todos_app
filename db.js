require("dotenv").config();
const Pool = require("pg").Pool;

const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASS}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB}`;

const prodConfig = process.env.DATABASE_URL, // heroku addons

const pool = new Pool({
  connectionString: process.env.NODE_ENV === "production" ? prodConfig : devConfig
});

module.exports = pool;
