// This file is created by egg-ts-helper@1.25.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHandleException from '../../../app/middleware/handleException';
import ExportJwtSession from '../../../app/middleware/jwtSession';

declare module 'egg' {
  interface IMiddleware {
    handleException: typeof ExportHandleException;
    jwtSession: typeof ExportJwtSession;
  }
}
