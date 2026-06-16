const fs = require('fs');
try {
  JSON.parse(fs.readFileSync('./src/locales/en/translation.json', 'utf8'));
  console.log('EN OK');
} catch(e) {
  console.error('EN ERROR:', e);
}
try {
  JSON.parse(fs.readFileSync('./src/locales/ar/translation.json', 'utf8'));
  console.log('AR OK');
} catch(e) {
  console.error('AR ERROR:', e);
}
