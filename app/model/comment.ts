/**
 * @Author: lwsmilence
 * @Create time: 2019/7/21 11:50
 * @Last Modified time: 2019/7/21 11:50
 * @Desc:
 */
import { Application } from 'egg';
import { INTEGER, STRING, DATE } from 'sequelize';

export default (app: Application) => {
    const Comment = app.model.define('comment', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        userId: { type: INTEGER, allowNull: false },
        resourceId: { type: INTEGER, allowNull: false },
        contents: STRING(2048),
        commentScore: INTEGER,
        commentType: { type: INTEGER, allowNull: false },

        createdAt: DATE,
        updatedAt: DATE,
    });

    return class extends Comment {};
};
