// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthor from '../../../app/model/author';
import ExportBaseModel from '../../../app/model/BaseModel';
import ExportBook from '../../../app/model/book';
import ExportBookTagMapping from '../../../app/model/bookTagMapping';
import ExportComment from '../../../app/model/comment';
import ExportTag from '../../../app/model/tag';
import ExportUser from '../../../app/model/user';
import ExportUserBehavior from '../../../app/model/userBehavior';
import ExportUtilsIndex from '../../../app/model/utils/index';

declare module 'egg' {
  interface IModel {
    Author: ReturnType<typeof ExportAuthor>;
    BaseModel: ReturnType<typeof ExportBaseModel>;
    Book: ReturnType<typeof ExportBook>;
    BookTagMapping: ReturnType<typeof ExportBookTagMapping>;
    Comment: ReturnType<typeof ExportComment>;
    Tag: ReturnType<typeof ExportTag>;
    User: ReturnType<typeof ExportUser>;
    UserBehavior: ReturnType<typeof ExportUserBehavior>;
    Utils: {
      Index: ReturnType<typeof ExportUtilsIndex>;
    }
  }
}
