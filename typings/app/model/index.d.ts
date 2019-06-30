// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseModel from '../../../app/model/BaseModel';
import ExportUser from '../../../app/model/user';
import ExportUtilsIndex from '../../../app/model/utils/index';

declare module 'egg' {
  interface IModel {
    BaseModel: ReturnType<typeof ExportBaseModel>;
    User: ReturnType<typeof ExportUser>;
    Utils: {
      Index: ReturnType<typeof ExportUtilsIndex>;
    }
  }
}
