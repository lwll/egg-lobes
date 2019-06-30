import { Application } from 'egg';
import { INTEGER, STRING, DATE } from 'sequelize';
import Helper from '../extend/helper';

export default (app: Application) => {
    const User = app.model.define('user', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nickname: {
            type: STRING(30),
            defaultValue: '叶瓣酱',
        },
        username: {
            type: STRING(30),
            unique: true,
            allowNull: false,
        },
        password: {
            type: STRING(60),
            allowNull: false,
            set(val: string) {
                this.setDataValue('password', Helper.createBcrypt(val));
            },
        },
        avatar: {
            type: STRING(128),
            defaultValue: 'http://localhost:88/image/icon-boy.png',
        },
        created_at: DATE,
        updated_at: DATE,
    });

    return class extends User {
        password: string;
    };
};
