/**
 * @Author: lwsmilence
 * @Create time: 2019/6/30 11:48
 * @Last Modified time: 2019/6/30 11:48
 * @Desc: jwt鉴权
 */

import { Context } from 'egg';
import * as jwt from 'jsonwebtoken';
import { StatusError } from '../entity/statusError';
export default () => {
    return async (ctx: Context, next) => {
        const jwtSessionConfig = ctx.app.config.jwtSession;
        const token = ctx.get(jwtSessionConfig.tokenHeader);
        if (token) {
            const sessionInfo = jwt.verify(token, jwtSessionConfig.secret);
            if (sessionInfo) {
                ctx.logger.info('sessionInfo---' + sessionInfo);
                ctx.jwtSession = sessionInfo;
                await next();
            }
        }
        throw new StatusError('请先登录！', StatusError.ERROR_STATUS.SESSION_EXPIRED);
    };
};
