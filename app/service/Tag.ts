/**
 * @Author: lwsmilence
 * @Create time: 2019/9/22 20:48
 * @Last Modified time: 2019/9/22 20:48
 * @Desc:
 */

import { Service } from 'egg';

export default class Tag extends Service {
    public async getTags() {
        const { model } = this.ctx;
        return await model.Tag.findAll();
    }
}
