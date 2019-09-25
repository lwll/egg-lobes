/**
 * @Author: lwsmilence
 * @Create time: 2019/7/21 10:59
 * @Last Modified time: 2019/7/21 10:59
 * @Desc:
 */

import { Application } from 'egg';
import { INTEGER, STRING, DATE } from 'sequelize';

export default (app: Application) => {
    const Tag = app.model.define('tag', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tagName: {
            type: STRING(10),
            allowNull: false,
        },
        tagGroup: {
            type: STRING(10),
            allowNull: false,
        },
        createdAt: DATE,
        updatedAt: DATE,
    });

    return class extends Tag {

    };
};
