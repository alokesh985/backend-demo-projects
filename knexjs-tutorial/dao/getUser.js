const res = require("express/lib/response");
const db = require("../db/db");

class getUserDAO {
  async getUser(stateGiven) {
    const query = `
    SELECT first_name, last_name
    FROM person p INNER JOIN user_details u
    ON p.id = u."userID"
    WHERE u.address->>'state' = '${stateGiven}'
    `;

    const results = await db.raw(query);
    return results.rows;
  }
}

module.exports = new getUserDAO();
