/**
 * @Author: lwsmilence
 * @Create time: 2019/9/22 20:50
 * @Last Modified time: 2019/9/22 20:50
 * @Desc:
 */
import { Controller } from 'egg';

export default class TagController extends Controller {
    public async getTags() {
        const { ctx } = this;
        ctx.body = await ctx.service.tag.getTags();
    }

}
