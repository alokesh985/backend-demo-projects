const getUserService = require("../service/getUser");

class getUserController {
  async getUser(req, res) {
    try {
      const ans = await getUserService.getUser(req.body);
      res.status(200).json(ans);
    } catch (error) {
      console.log("\n\n\n\n", error);
      res.status(500).json("Something went wrong!");
    }
  }
}

module.exports = new getUserController();
