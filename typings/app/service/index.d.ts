// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLogin from '../../../app/service/Login';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    login: ExportLogin;
    test: ExportTest;
  }
}
