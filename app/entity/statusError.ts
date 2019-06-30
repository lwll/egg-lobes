/**
 * @Author: lwsmilence
 * @Create time: 2019/6/29 22:36
 * @Last Modified time: 2019/6/29 22:36
 * @Desc:
 */

export class StatusError extends Error {

    static ERROR_STATUS = {
        // 服务器内部错误
        SERVER_ERROR: 500,
        // 请求参数错误
        REQUEST_PARAMS_ERROR: 400,
        // 会话过期
        SESSION_EXPIRED: 401,
    };

    status: number;

    constructor (message: string, status: number = StatusError.ERROR_STATUS.SERVER_ERROR) {
        super(message);
        this.status = status;
    }
}
