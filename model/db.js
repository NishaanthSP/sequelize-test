const { Sequelize } = require('sequelize');

// Models
const X_shops = require('./X_shops');

const options = {
  dialect: 'mysql',
  database: 'db_name',
  // schema: config.get('Postgres_Schema'),
  username: 'user',
  password: 'pass',
  host: '127.0.0.1',
  port: 3306,
  logging: console.log,
  define: {
    timestamps: true,
    freezeTableName: true
  },
};

const sequelize = new Sequelize(options.database, options.username, options.password, {
  host: options.host,
  port: options.port,
  dialect: options.dialect,
  // schema: options.schema,
  logging: options.logging,
  define: {
    timestamps: true,
    freezeTableName: true
  },
});

const modelDefinitions = [
	X_shops
];

// Define Models
for (const defn of modelDefinitions) {
	defn(sequelize);
}

module.exports = sequelize;