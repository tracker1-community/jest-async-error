import path from 'path';
import { getConfig, getDefaultDataPath } from './environment';

const originalEnv = { ...process.env };
const defaultSecret = '12345_is_a_bad_passphrase';
const defaultDataPath = getDefaultDataPath();
const defaultPassCheckUrl = 'https://api.pwnedpasswords.com/range/';

describe('config/base', () => {
  beforeEach(_ => {
    process.env = {
      ...originalEnv,
      RBI_SECRET: undefined,
      RBI_DB_PATH: undefined,
      RBI_PASSCHECK_URL: undefined,
      RBI_KEY_PVT: undefined,
      RBI_KEY_PUB: undefined,
      RBI_KEY_PATH_PVT: undefined,
      RBI_KEY_PATH_PUB: undefined,
      RBI_KEY_PVT_SECRET: undefined,
    };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it('returns defaults', () => {
    // arrange
    // nothing to do

    // act
    const result = getConfig();

    // assert
    expect(result).toEqual({
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
