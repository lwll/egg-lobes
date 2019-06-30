/**
 * @Author: lwsmilence
 * @Create time: 2019/6/30 12:55
 * @Last Modified time: 2019/6/30 12:55
 * @Desc:
 */

import { Context } from 'egg';
import { StatusError } from '../entity/statusError';

export default () => {
    return async (ctx: Context, next) => {
        try {
            await next();

            if (ctx.status === 404 && !ctx.body) {
                ctx.body = {
                    code: 404,
                    data: null,
                    msg: '当前请求不存在',
                    time: new Date().toLocaleString(),
                };
            }
        } catch (e) {
            if (ctx.app.config.env === 'default') {
                ctx.logger.info('---------- exception ----------');
                ctx.logger.info(e);
                ctx.logger.info('----------- exception end ------------');
            }

            let statusCode = e.status || 500;
            let statusMessage = e.message || '似乎出了什么问题';

            if (e instanceof StatusError) {
                statusCode = e.status;
                statusMessage = e.message;
            } else {
                // egg-sequelize 的异常处理
                if (e.name === 'SequelizeUniqueConstraintError') {
                    statusCode = 555;
                    statusMessage = `数据库操作失败: ${e.errors[0].message}`;
                }

                // 处理由 jwt 签发的 token 失效异常
                if (e.name === 'TokenExpiredError') {
                    statusCode = 403;
                    statusMessage = 'token 已过期，请重新登录';
                }

                // 处理由 jwt 验证 token 非法异常
                if (e.name === 'JsonWebTokenError') {
                    statusCode = 422;
                    statusMessage = '非法的 token';
                }
            }

            ctx.body = {
                code: statusCode,
                data: null,
                msg: statusMessage,
                time: new Date().toLocaleString(),
            };
        }
    };
};
