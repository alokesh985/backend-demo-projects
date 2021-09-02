const userDetailsDAO = require("../dao/user_details");

class userDetailsService {
  createUserDetails(userDetailsDTO) {
    const { userID, address } = userDetailsDTO;
    return userDetailsDAO.createUserDetails(userID, address);
  }
}

module.exports = new userDetailsService();
