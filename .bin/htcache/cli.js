#! /usr/bin/env node

const program = require('commander');
const htcache = require('./htcache');

program
  .version('0.1.0')
  .usage('[options] <file ...>')
  .option('-t, --template [file]', 'Specify template')
  .option('-p, --pattern [value]', 'Specify file pattern')
  .option('-a, --max-age [value]', 'Specify max-age')
  .action(function (dir) {
    console.log('do it %s', dir, program.template);
    htcache(dir, {
      maxAge: program.maxAge,
      pattern: program.pattern,
      template: program.template
    })
  })
  .parse(process.argv);


// const pattern = program.pattern;
//
// console.log('maxAge: ', program.maxAge);
// console.log('pattern: ', program.pattern);
// console.log('template: ', program.template);

// var template = ejs.compile(str, options);
// template(data);
// // => Rendered HTML string
//
// ejs.render(str, data, options);
// // => Rendered HTML string
//
// ejs.renderFile(filename, data, options, function(err, str){
//     // str => Rendered HTML string
// });
