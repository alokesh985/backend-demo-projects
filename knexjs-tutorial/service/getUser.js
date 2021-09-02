const getUserDAO = require("../dao/getUser");

class getUserService {
  getUser(userDTO) {
    const { state } = userDTO;
    return getUserDAO.getUser(state);
  }
}
module.exports = new getUserService();
