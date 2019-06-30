import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'watermelon',
      database: 'egg-lobes',
    },
    app: true,
    agent: false,
  };
  // @ts-ignore
  config.sequelize = {
    dialect: 'mysql',
    database: 'egg-lobes',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'watermelon',
  };
  return config;
};
