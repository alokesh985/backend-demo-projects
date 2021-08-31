exports.up = function (knex) {
  // This will create a table named person
  return knex.schema.createTable("person", (table) => {
    // Create a column, called id that will auto-increment
    table.increments("id");
    // Create a column of datatype string, called first_name
    table.string("email").notNullable().unique();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    // Two columns created will be created_at and updated_at
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  // Drop the table to undo the export.up
  return knex.schema.dropTable("person");
};
