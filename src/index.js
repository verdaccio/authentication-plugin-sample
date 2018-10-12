// @flow

// import createError from 'http-errors';

// import type {HttpError} from 'http-errors';

import type {
  PackageAccess,
  IPluginAuth,
  RemoteUser,
  Logger,
  PluginOptions,
} from '@verdaccio/types';

import type {AuthSampleExtendConfig, SubTypePackageAccess} from '../types';

export default class ExampleAuthPlugin implements IPluginAuth {
  config: AuthSampleExtendConfig;
  logger: Logger;
  users: any;

  constructor(config: AuthSampleExtendConfig, options: PluginOptions) {
    this.config = config;
    this.logger = options.logger;
    this.users = {};
  }

  changePassword(user: string, password: string, newPassword: string, cb: verdaccio$Callback): void {
    this.users[user] = `${user}:${password}`;

    cb(null, user);
  }

  adduser(user: string, password: string, cb: verdaccio$Callback): void {
    this.users[user] = `${user}:${password}`;

    cb(null, [user]);
  }

  authenticate(user: string, password: string, cb: verdaccio$Callback): void {
    this.logger.info({user}, 'authenticate @{user}');

    // if something goes wrong
    // throw new Error('should specify "file" in config');
    // const err: HttpError = createError(500, 'something went wrong');

    // cb(err);

    // authenticate any user
    cb(null, [user]);
  }

  allow_access(user: RemoteUser, pkg: SubTypePackageAccess, cb: verdaccio$Callback): void {
    // allow everyone the access to access
    this.logger.info({user}, 'allow access for the user: @{user}');

    return cb(null, true);
  }

  allow_publish(user: RemoteUser, pkg: PackageAccess, cb: verdaccio$Callback): void {
    // allow everyone the access to publish
    this.logger.info({user}, 'allow publish for the user @{user}');

    return cb(null, true);
  }
}
