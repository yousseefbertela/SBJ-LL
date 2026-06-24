// Wrapper so Claude Preview can (re)start `shopify theme dev` with the Theme Access token set.
// If a theme dev is already listening on 9292, Preview reuses it and this never runs.
const { spawn } = require('child_process');
process.env.SHOPIFY_CLI_THEME_TOKEN = 'shptka_947635f12671d297209996e9ade7de7d';
process.env.SHOPIFY_FLAG_STORE = 'sbjuve.myshopify.com';
const p = spawn(
  'shopify',
  [
    'theme', 'dev',
    '--store', 'sbjuve.myshopify.com',
    '--theme', '141521125475',
    '--port', '9292',
    // Editors write atomic-save temp files (foo.liquid.tmp.<pid>.<hash>); the
    // theme dev watcher would try to upload them and 500. Ignore them.
    '--ignore', '*.tmp.*',
    '--ignore', '*.tmp*',
    '--ignore', '.claude/*',
  ],
  { stdio: 'inherit', shell: true }
);
p.on('exit', (c) => process.exit(c ?? 0));
