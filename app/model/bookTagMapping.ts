/**
 * @Author: lwsmilence
 * @Create time: 2019/9/22 15:31
 * @Last Modified time: 2019/9/22 15:31
 * @Desc:
 */

import { Application } from 'egg';
import { INTEGER, DATE } from 'sequelize';

export default (app: Application) => {
    const BookTagMapping = app.model.define('bookTagMapping', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        bookId: { type: INTEGER, allowNull: false },
        tagId: { type: INTEGER, allowNull: false },

        createdAt: DATE,
        updatedAt: DATE,
    });

    return class extends BookTagMapping {};
};
