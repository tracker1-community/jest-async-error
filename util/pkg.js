import fs from 'fs';

//const pkg = JSON.parse(fs.readFileSync(findup('package.json')));
const pkg = JSON.parse(fs.readFileSync(`${__dirname}/../package.json`));

export const packageBase = {
  name: pkg.name,
  version: pkg.version,
  build: pkg.build || null,
};

export default pkg;
