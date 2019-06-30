import { Controller } from 'egg';

export default class LoginController extends Controller {
    /**
     * 登录时获取token
     */
    public async oauthToken() {
        const { ctx } = this;
        const userData = ctx.query;
        const token = await ctx.service.login.handleAuth(userData.username, userData.password);
        ctx.body = { token };
    }

    /**
     * 根据session获取用户信息
     */
    public async getUserInfo() {
        const { ctx } = this;
        const sessionInfo = ctx.jwtSession;
        ctx.body = await ctx.service.login.getUserInfo(sessionInfo.username);
    }
}
