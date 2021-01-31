module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'database',
      user: 'atlasone',
      password: 'atlasone',
      database: 'atlasone',
      port: '5432'
    },
    pool: { min: 0, max: 7 },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};
