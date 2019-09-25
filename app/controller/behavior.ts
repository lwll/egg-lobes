/**
 * @Author: lwsmilence
 * @Create time: 2019/8/26 18:11
 * @Last Modified time: 2019/8/26 18:11
 * @Desc:
 */

import { Controller } from 'egg';

export default class BehaviorController extends Controller {
    public async getBehaviorCounts() {
        const { ctx } = this;
        const sessionInfo = ctx.jwtSession;
        ctx.body = await ctx.service.behavior.getBehaviorCounts(sessionInfo.username);
    }
}
