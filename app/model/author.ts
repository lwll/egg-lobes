/**
 * @Author: lwsmilence
 * @Create time: 2019/7/21 11:10
 * @Last Modified time: 2019/7/21 11:10
 * @Desc:
 */

import { Application } from 'egg';
import { INTEGER, STRING, DATE } from 'sequelize';

export default (app: Application) => {
    const Author = app.model.define('author', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        authorName: {
            type: STRING(30),
            allowNull: false,
        },
        gender: { type: STRING(2), defaultValue: '未知' },
        bornAt: { type: DATE, defaultValue: '1949-10-01 00:00:00' },
        dieAt: DATE,
        introduction: { type: STRING(2048), defaultValue: '暂无简介' },
        avatar: { type: STRING(128), defaultValue: 'http://localhost:88/image/lobes/icon-boy.png' },

        createdAt: DATE,
        updatedAt: DATE,
    });

    return class extends Author {

    };
};
