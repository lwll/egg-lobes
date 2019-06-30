import { Application } from 'egg';

export default (app: Application) => {
    const { controller, router } = app;

    router.get('/', controller.home.index);

    router.get('/oauth/token', controller.login.oauthToken);

    router.get('/get/user', controller.login.getUserInfo);
};
