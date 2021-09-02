exports.up = function (knex) {
  return knex.schema.createTable("user_details", (column) => {
    // Table with person table id as foreign key
    column.integer("userID").notNullable().references("id").inTable("person");
    column.json("address");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user_details");
};
