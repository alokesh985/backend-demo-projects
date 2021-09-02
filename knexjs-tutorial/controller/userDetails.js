const { user } = require("pg/lib/defaults");
const userDetailsService = require("../service/userDetails");

class userDetailsController {
  async createUserDetails(req, res) {
    try {
      const userID = await userDetailsService.createUserDetails(req.body);
      res.status(200).json(userID);
    } catch (error) {
      console.log("\n\n\n\n\n" + error);
      res.status(500).json("Something went wrong!");
    }
  }
}

module.exports = new userDetailsController();
