module.exports = {
  host: '127.0.0.1',
  username: 'postgres',
  password: 'admin',
  database: 'nodeauth',
  dialect: 'postgres',
  operatorsAliases: 'postgres',
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}