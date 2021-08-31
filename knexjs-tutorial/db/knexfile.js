// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "pg_demo",
      user: "alakeshbora",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
