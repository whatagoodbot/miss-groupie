export default {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      database: 'missGroupie',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      charset: 'utf8mb4'
    },
    migrations: {
      directory: './migrations'
    },
    pool: {
      min: 2,
      max: 10
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST_PRODUCTION,
      database: 'missGroupie',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      charset: 'utf8mb4'
    },
    migrations: {
      directory: './migrations'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}
