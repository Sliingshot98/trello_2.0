import config from './index'

const db = config.db;
const schema = db.schema

module.exports = {
    development: {
    dialect: 'sqlite',
    seederStorage: 'sequelize',
    storage: config.db,
    logQueryParameters: true,
    typeValidation: true
  },

  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    define: {
      schema
    }
  }
};
