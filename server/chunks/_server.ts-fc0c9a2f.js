import { e as error, j as json } from './index-f2253eb7.js';
import { q as query } from './db-d9e48c45.js';
import 'pg';

const POST = async (event) => {
  const { slug } = event.params;
  let result;
  let sql;
  try {
    switch (slug) {
      case "logout":
        if (event.locals.user) {
          sql = `CALL delete_session($1);`;
          result = await query(sql, [event.locals.user.id]);
        }
        return json({ message: "Logout successful." }, {
          headers: {
            "Set-Cookie": `session=; Path=/; SameSite=Lax; HttpOnly; Expires=${( new Date()).toUTCString()}`
          }
        });
      case "login":
        sql = `SELECT authenticate($1) AS "authenticationResult";`;
        break;
      case "register":
        sql = `SELECT register($1) AS "authenticationResult";`;
        break;
      default:
        throw error(404, "Invalid endpoint.");
    }
    const body = await event.request.json();
    if (slug == "register" && (!body.email || !body.password || !body.firstName || !body.lastName))
      throw error(400, "Please supply all required fields: email, password, first and last name.");
    result = await query(sql, [JSON.stringify(body)]);
  } catch (err) {
    throw error(503, "Could not communicate with database.");
  }
  const { authenticationResult } = result.rows[0];
  if (!authenticationResult.user)
    throw error(authenticationResult.statusCode, authenticationResult.status);
  event.locals.user = authenticationResult.user;
  return json(
    {
      message: authenticationResult.status,
      user: authenticationResult.user
    },
    {
      headers: {
        "Set-Cookie": `session=${authenticationResult.sessionId}; Path=/; SameSite=Lax; HttpOnly;`
      }
    }
  );
};

export { POST };
//# sourceMappingURL=_server.ts-fc0c9a2f.js.map
