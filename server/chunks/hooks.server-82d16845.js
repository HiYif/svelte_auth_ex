import { q as query } from './db-d9e48c45.js';
import 'pg';

async function attachUserToRequestEvent(sessionId, event) {
  const sql = `
    SELECT * FROM get_session($1);`;
  const { rows } = await query(sql, [sessionId]);
  if (rows?.length > 0) {
    event.locals.user = rows[0].get_session;
  }
}
const handle = async ({ event, resolve }) => {
  const { cookies } = event;
  const sessionId = cookies.get("session");
  if (sessionId) {
    await attachUserToRequestEvent(sessionId, event);
  }
  if (!event.locals.user)
    cookies.delete("session");
  const response = await resolve(event);
  return response;
};

export { handle };
//# sourceMappingURL=hooks.server-82d16845.js.map
