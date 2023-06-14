import { e as error, j as json } from './index-f2253eb7.js';
import { q as query } from './db-d9e48c45.js';
import 'pg';

const PUT = async (event) => {
  const { user } = event.locals;
  if (!user)
    throw error(401, "Unauthorized - must be logged-in.");
  try {
    const userUpdate = await event.request.json();
    await query(`CALL update_user($1, $2);`, [user.id, JSON.stringify(userUpdate)]);
  } catch (err) {
    throw error(503, "Could not communicate with database.");
  }
  return json({
    message: "Successfully updated user profile."
  });
};

export { PUT };
//# sourceMappingURL=_server.ts-4e09c1ac.js.map
