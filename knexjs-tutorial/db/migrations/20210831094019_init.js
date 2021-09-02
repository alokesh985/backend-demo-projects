exports.up = function (knex) {
  // This will create a table named person
  return knex.schema.createTable("person", (columns) => {
    // Create a column, called id that will auto-increment
    columns.increments();
    // Create a column of datatype string, called first_name
    columns.string("email").notNullable().unique();
    columns.string("first_name").notNullable();
    columns.string("last_name").notNullable();
    // Two columns created will be created_at and updated_at
    columns.timestamps(true, true);
  });
};

exports.down = function (knex) {
  // Drop the table to undo the exports.up
  return knex.schema.dropTable("person");
};
