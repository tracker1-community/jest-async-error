import logger from '@tracker1/logger';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function main(skip) {
  if (skip) return;
  global.log = await logger();

  log.error('TEST');

  // const [r, cr] = await Promise.all([
  //   log.timeRequest('LOG REQUEST', () => delay(100).then(_ => 'SUCCESS')),
  //   log.timeClientRequest('CLIENT REQUEST', () =>
  //     delay(500).then(_ => {
  //       throw new Error('test 2');
  //     })
  //   ),
  // ]);
}

main(!!module.parent)
  .then(async _ => {
    await delay(100);
  })
  .catch(err => {
    if (global.log) log.fatal(err);
    else console.error(err);
    process.exit(666);
  });
