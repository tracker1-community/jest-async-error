import os from 'os';
import path from 'path';

export const getDefaultDataPath = useOS => {
  switch (useOS || os.platform()) {
    case 'win32':
      return path.join(
        process.env.PROGRAMDATA || 'C:/ProgramData',
        'runbeck/ingressum/ingressum.db'
      );
    case 'darwin': // MacOS
      return `/Library/Application Support/runbeck/ingressum/ingressum.db`;
    case 'aix':
    case 'freebsd':
    case 'linux':
    case 'openbsd':
    case 'sunos':
    default:
      return `/var/lib/runbeck/ingressum/ingressum.db`;
  }
};

export const getConfig = (input = {}) => {
  /**
   * Baseline options from environment variables
   *
   * `RBI_SECRET` the secret to use for aes-256-ctr encryption
   * `RBI_DB_PATH` the full path to the sqlite database file to use.
   * `RBI_PASSCHECK_URL` [optional] the base url to use for compromized passphrase range checking, must match haveibeenpwnd api, will use the live API by default.
   * `RBI_KEY_PVT` or `RBI_KEY_PATH_PVT` - PEM format
   * `RBI_KEY_PUB` or `RBI_KEY_PATH_PUB` - PEM format
   * `RBI_KEY_PVT_SECRET` secret for pvt key, fallback to `RBI_SECRET` or default
   */

  const {
    RBI_SECRET,
    RBI_DB_PATH,
    RBI_PASSCHECK_URL,
    RBI_KEY_PVT,
    RBI_KEY_PUB,
    RBI_KEY_PATH_PVT,
    RBI_KEY_PATH_PUB,
    RBI_KEY_PVT_SECRET,
  } = process.env;

  const dataPath = getDefaultDataPath();
  const config = Object.assign(
    {
      data: RBI_DB_PATH || dataPath,
      secret: RBI_SECRET || '12345_is_a_bad_passphrase',
      dbPath: path.join(RBI_DB_PATH || dataPath, 'ingressum.db'),
      pubKey: RBI_KEY_PUB,
      pvtKey: RBI_KEY_PVT,
      pvtKeySecret: RBI_KEY_PVT_SECRET || RBI_SECRET || '12345_is_a_bad_passphrase',
      pubKeyPath: RBI_KEY_PATH_PUB,
      pvtKeyPath: RBI_KEY_PATH_PVT,
      passcheckUrl: RBI_PASSCHECK_URL || 'https://api.pwnedpasswords.com/range/',
    },
    input
  );
  return config;
};

export let config = getConfig();
