import path from 'path';
import { getConfig, getDefaultDataPath } from './environment';

const originalEnv = { ...process.env };
const defaultSecret = '12345_is_a_bad_passphrase';
const defaultDataPath = getDefaultDataPath();
const defaultPassCheckUrl = 'https://api.pwnedpasswords.com/range/';

describe('config/base', () => {
  beforeEach(_ => {
    process.env = { ...originalEnv };
  });

  it('returns defaults', () => {
    // arrange
    process.env = {};

    // act
    const result = getConfig();

    // assert
    return expect(result).toEqual({
      data: defaultDataPath,
      secret: defaultSecret,
      dbPath: path.join(defaultDataPath, 'ingressum.db'),
      pubKey: undefined,
      pvtKey: undefined,
      pvtKeySecret: defaultSecret,
      pubKeyPath: undefined,
      pvtKeyPath: undefined,
      passcheckUrl: defaultPassCheckUrl,
    });
  });
});
