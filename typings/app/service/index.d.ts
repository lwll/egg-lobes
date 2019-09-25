// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBehavior from '../../../app/service/Behavior';
import ExportBook from '../../../app/service/Book';
import ExportLogin from '../../../app/service/Login';
import ExportTag from '../../../app/service/Tag';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    behavior: ExportBehavior;
    book: ExportBook;
    login: ExportLogin;
    tag: ExportTag;
    test: ExportTest;
  }
}
