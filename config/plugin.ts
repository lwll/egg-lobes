import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  //   validate: {
  //       enable: true,
  //       package: 'egg-validate',
  //   },
    mysql: {
        enable: true,
        package: 'egg-mysql',
    },
    sequelize: {
        enable: true,
        package: 'egg-sequelize',
    },
};

export default plugin;
