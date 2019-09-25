// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBehavior from '../../../app/controller/behavior';
import ExportBook from '../../../app/controller/book';
import ExportLogin from '../../../app/controller/login';
import ExportTag from '../../../app/controller/tag';

declare module 'egg' {
  interface IController {
    behavior: ExportBehavior;
    book: ExportBook;
    login: ExportLogin;
    tag: ExportTag;
  }
}
