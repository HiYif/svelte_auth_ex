import { j as jwt } from './index-b37b81f9.js';
import { q as query, S as SENDGRID_SENDER, D as DOMAIN, J as JWT_SECRET } from './db-d9e48c45.js';
import sgMail from '@sendgrid/mail';
import { b as private_env } from './shared-server-f2d06a89.js';
import './index-74f74a14.js';
import 'buffer';
import 'stream';
import 'util';
import 'crypto';
import 'pg';

const sendMessage = async (message) => {
  const { SENDGRID_SENDER: SENDGRID_SENDER2, SENDGRID_KEY } = private_env;
  try {
    sgMail.setApiKey(SENDGRID_KEY);
    const completeMessage = {
      from: SENDGRID_SENDER2,
      // default sender can be altered
      ...message
    };
    await sgMail.send(completeMessage);
  } catch (errSendingMail) {
    console.error(errSendingMail);
  }
};
const POST = async (event) => {
  const body = await event.request.json();
  const sql = `SELECT id as "userId" FROM users WHERE email = $1 LIMIT 1;`;
  const { rows } = await query(sql, [body.email]);
  if (rows.length > 0) {
    const { userId } = rows[0];
    const secret = JWT_SECRET;
    const token = jwt.sign({ subject: userId }, secret, {
      expiresIn: "30m"
    });
    const message = {
      to: { email: body.email },
      from: SENDGRID_SENDER,
      subject: "Password reset",
      categories: ["account"],
      html: `
        <a href="${DOMAIN}/auth/reset/${token}">Reset my password</a>. Your browser will open and ask you to provide a
        new password with a confirmation then redirect you to your login page.
      `
    };
    sendMessage(message);
  }
  return new Response(void 0, { status: 204 });
};

export { POST };
//# sourceMappingURL=_server.ts-46241513.js.map
