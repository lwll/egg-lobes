/**
 * @Author: lwsmilence
 * @Create time: 2019/7/21 11:25
 * @Last Modified time: 2019/7/21 11:25
 * @Desc:
 */

import { Application } from 'egg';
import { INTEGER, DATE } from 'sequelize';

export default (app: Application) => {
    const UserBehavior = app.model.define('userBehavior', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        userId: { type: INTEGER, allowNull: false },
        resourceId: { type: INTEGER, allowNull: false },
        behaviorType: { type: INTEGER, allowNull: false },

        createdAt: DATE,
        updatedAt: DATE,
    });

    return class extends UserBehavior {};
};
