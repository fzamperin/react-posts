module.exports = {
  localhost: {
    username: "root",
    password: "samsung",
    database: "alumnet",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      charset: "utf8mb4",
      dialectOptions: {
        collate: "utf8mb4_general_ci"
      }
    }
  },
  test: {
    username: "root",
    password: "test123",
    database: "alumnet",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
    define: {
      charset: "utf8mb4",
      dialectOptions: {
        collate: "utf8mb4_general_ci"
      }
    }
  },
  development: {
    username: "root",
    password: "test123",
    database: "alumnet",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      charset: "utf8mb4",
      dialectOptions: {
        collate: "utf8mb4_general_ci"
      }
    }
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
    logging: false,
    define: {
      charset: "utf8mb4",
      dialectOptions: {
        collate: "utf8mb4_general_ci"
      }
    }
  }
}
