/**
 * @Author: lwsmilence
 * @Create time: 2019/9/22 14:31
 * @Last Modified time: 2019/9/22 14:31
 * @Desc:
 */

import { Service } from 'egg';

export default class Book extends Service {
    public async getBookByType(bookType: number) {
        const { model } = this.ctx;
        return await model.Book.findAll({
            where: { type: bookType },
            limit: 12,
        });
    }

}
