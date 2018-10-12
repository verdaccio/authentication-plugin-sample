// @flow

import type {Config, PackageAccess} from '@verdaccio/types';

export type Advanced = {
  foo: string,
  bar: string
};

export type AdvancedList = {
  [key: string]: Advanced
};

export interface AuthSampleExtendConfig extends Config {
  some_custom_prop?: number;
  some_advance_prop: AdvancedList;
}

export type SubTypePackageAccess = PackageAccess & {
  sub?: boolean
}
