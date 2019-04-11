const fetch = require('node-fetch');
const sinon = require('sinon');
const atob = require('atob');
const btoa = require('btoa');

// Define globals to cut down on imports in test files
global.sinon = sinon;
global.fetch = fetch;
global.btoa = btoa;
global.atob = atob;

module.exports = () => {};
