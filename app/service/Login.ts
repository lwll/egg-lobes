import { Service } from 'egg';
import * as jwt from 'jsonwebtoken';
import { StatusError } from '../entity/statusError';
import Helper from '../extend/helper';

/**
 * Login Service
 */
export default class Login extends Service {
    /**
     * 登录时返回token
     * @param username
     * @param password
     */
    public async handleAuth(username: string, password: string) {
        const { model, app: { config } } = this.ctx;
        const user = await model.User.findOne({
            where: { username },
        });
        if (!user) {
            await model.User.create({
                username,
                password,
            });
        } else if (!Helper.verifyBcrypt(password, user.password)) {
            throw new StatusError('用户名或密码不正确！', StatusError.ERROR_STATUS.SERVER_ERROR);
        }
        return jwt.sign({ username, password }, config.jwtSession.secret);
    }

    /**
     * 根据用户名获取用户信息
     * @param username
     */
    public async getUserInfo(username: string) {
        const { model } = this.ctx;
        return await model.User.findOne({
            where: { username },
        });
    }
}
