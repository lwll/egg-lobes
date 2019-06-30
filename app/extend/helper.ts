import { Context } from 'egg';
import * as bcryptjs from 'bcryptjs';

export default {
    getContext(this: any): Context {
        return this;
    },
    createBcrypt(value: string, salt: number = 10): string {
        return bcryptjs.hashSync(value, bcryptjs.genSaltSync(salt));
    },
    verifyBcrypt(value: string, hash: string): boolean {
        return bcryptjs.compareSync(value, hash);
    },
};
