const fs = require('fs');
const paths = ['package.json', 'bot/index.js', 'dashboard/index.js', 'models/Guild.js'];
for (const p of paths) {
  if (!fs.existsSync(p)) throw new Error(`${p} missing`);
}
require('../bot/utils/format');
require('../models/Guild');
process.stdout.write('smoke ok\n');
