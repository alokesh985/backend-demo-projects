const db = require("../db/db");

class UserDetailsDAO {
  async createUserDetails(ID, address) {
    const [userID] = await db("user_details")
      .insert({
        userID: ID,
        address,
      })
      .returning("userID");

    return userID;
  }
}

module.exports = new UserDetailsDAO();
