/**
 * @Author: lwsmilence
 * @Create time: 2019/8/26 18:08
 * @Last Modified time: 2019/8/26 18:08
 * @Desc:
 */
import { Service } from 'egg';
import { Constant } from '../entity/constant';

export default class Behavior extends Service {

    public async getBehaviorCounts(username: string) {
        const { model } = this.ctx;
        const user = await model.User.findOne({
            where: { username },
        });
        const result = {};
        for (const key in Constant.USER_BEHAVIOR) {
            result[key] = await model.UserBehavior.count({
                where: {
                    userId: user.id,
                    behaviorType: Constant.USER_BEHAVIOR[key],
                },
            });
        }
        return result;
    }
}
