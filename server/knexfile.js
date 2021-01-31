module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      user: 'atlasone',
      password: 'atlasone',
      database: 'atlasone'
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
