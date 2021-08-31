const personService = require("../service/person");

class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.log(`Error is ${err}`);
      res.status(500).json("Something went wrong! Please re-check parameters");
    }
  }
}

module.exports = new PersonController();
