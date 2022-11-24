module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-101.railway.app"),
      port: env.int("DATABASE_PORT", 7026),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "8CLnXdwX7VkjHvl7Z72D"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
