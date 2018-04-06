const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

// Creates a .htaccess file for caching
const htcache = function(dest, options = {}) {
  options = Object.assign({
    template: path.join(__dirname, 'htcache.tpl.js'),
    maxAge: 31536000,
    pattern: '\\.(\w+)$'
  }, Object.entries(options)
    .filter(([key, value]) => value !== undefined)
    .reduce((obj, [key, value]) => (obj[key] = value, obj), {})
  );

  const destFile = path.join(dest, '.htaccess');

  ejs.renderFile(options.template, options, {}, (err, data) => {
    if (!err) {
      fs.writeFile(destFile, data, (err) => {
        if (err) throw err;
        console.log('Successfully written .htaccess file');
      });
    }
  });

}

module.exports = htcache;
