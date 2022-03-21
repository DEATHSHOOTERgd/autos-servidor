const path = require('path');

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "ec2-54-89-49-242.compute-1.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "d5fmbunqnscd49"),
        username: env("DATABASE_USERNAME", "wjazjtibslcvti"),
        password: env("DATABASE_PASSWORD", "f46196931b507b473a1b3c06bd7669d3379baf67adcd06d1f9f2a8a5d180355a"),
        schema: env("DATABASE_SCHEMA", "public"),
      },
      options: {},
    },
  },
});
