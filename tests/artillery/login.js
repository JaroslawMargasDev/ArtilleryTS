const { testLogin } = require('../../js-tests/commands/login');

async function artilleryScript(page) {
  await testLogin(page);
}

module.exports = { artilleryScript };