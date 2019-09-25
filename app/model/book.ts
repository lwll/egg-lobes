/**
 * @Author: lwsmilence
 * @Create time: 2019/7/18 22:16
 * @Last Modified time: 2019/7/18 22:16
 * @Desc: 书籍表
 */

import { Application } from 'egg';
import { INTEGER, STRING, DATE } from 'sequelize';

export default (app: Application) => {
    const Book = app.model.define('book', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: STRING(30),
            allowNull: false,
        },
        originalName: {
            type: STRING(30),
        },
        authorId: {
            type: INTEGER,
            defaultValue: 1,
        },
        authorName: {
            type: STRING(30),
            defaultValue: '苏平江',
        },
        publisher: {
            type: STRING(30),
            defaultValue: '叶瓣文学社',
        },
        publishedAt: DATE,
        cover: {
            type: STRING(128),
            defaultValue: 'http://localhost:88/image/default-book-cover.png',
        },
        introduction: {
            type: STRING(2048),
            defaultValue: '暂无简介',
        },
        createdAt: DATE,
        updatedAt: DATE,
    });

    return class extends Book {

    };
};
