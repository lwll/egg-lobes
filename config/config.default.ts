import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1560917417966_2645';

  // add your egg config in here
  config.middleware = [];
  config.mysql = {
    client: {
      host: '127.0.0.1',
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
    timezone: '+08:00',
  };
  config.security = {
    csrf: {
      ignore: '/oauth/token',
    },
  };

  config.middleware = [
      'jwtSession',
      'handleException',
  ];

  // 为jwt中间件设置config
  config.jwtSession = {
    enable: true,
    tokenHeader: 'X-Lobes-Token',
    secret: 'MyLobes',
    ignore: '/oauth/token',
  };

  config.handleException = {
    enable: true,
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
