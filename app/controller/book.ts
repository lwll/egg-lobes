/**
 * @Author: lwsmilence
 * @Create time: 2019/9/22 14:25
 * @Last Modified time: 2019/9/22 14:25
 * @Desc:
 */

import { Controller } from 'egg';

export default class BookController extends Controller {
    public async getSpecificBook() {
        const { ctx } = this;
        const query = ctx.query;
        if (query.bookType) {
            ctx.body = await ctx.service.book.getBookByType(query.bookType);
        }
    }
}
