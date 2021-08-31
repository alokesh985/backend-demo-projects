const knex = require("knex");

// knexfile is basically the database configuration
const knexfile = require("./knexfile");

// Don't access knexfile directly
// but decide with env vars in PROD
const db = knex(knexfile.development);

module.exports = db;
