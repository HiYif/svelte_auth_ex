import pg from 'pg';

const DATABASE_URL = "postgres://postgres:NYWjusyncFbUCkq6@localhost:5433/auth";
const DOMAIN = "http://localhost:3000";
const JWT_SECRET = "hellosvelteauth";
const SENDGRID_SENDER = "yifan.himirror@gmail.com";
const pool = new pg.Pool({
  max: 10,
  // default
  connectionString: DATABASE_URL
  // ssl: {
  //   rejectUnauthorized: false
  // }
});
const query = (sql, params) => pool.query(sql, params);

export { DOMAIN as D, JWT_SECRET as J, SENDGRID_SENDER as S, query as q };
//# sourceMappingURL=db-d9e48c45.js.map
