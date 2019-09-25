import { Application } from 'egg';

export default (app: Application) => {
    const { controller, router } = app;

    router.get('/oauth/token', controller.login.oauthToken);

    router.get('/get/user', controller.login.getUserInfo);

    router.get('/get/behavior/counts', controller.behavior.getBehaviorCounts);

    router.get('/get/book', controller.book.getSpecificBook);

    router.get('/get/tag', controller.tag.getTags);
};
