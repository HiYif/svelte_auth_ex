import { j as json } from './index-f2253eb7.js';
import { j as jwt } from './index-b37b81f9.js';
import { J as JWT_SECRET, q as query } from './db-d9e48c45.js';
import './index-74f74a14.js';
import 'buffer';
import 'stream';
import 'util';
import 'crypto';
import 'pg';

const PUT = async (event) => {
  const body = await event.request.json();
  const { token, password } = body;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.subject;
    const sql = `CALL reset_password_v2($1, $2);`;
    await query(sql, [userId, password]);
    return json({
      message: "Password successfully reset."
    });
  } catch (error) {
    return json(
      {
        message: "Password reset token expired."
      },
      {
        status: 403
      }
    );
  }
};

export { PUT };
//# sourceMappingURL=_server.ts-23073a73.js.map
