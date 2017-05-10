let gulp = require('gulp');
let gutil = require('gulp-util');
let join = require('path').join;
let posixJoin = require('path').posix.join;
let fs = require('fs');
let config = require('../config/tasks-config.js');

gulp.task('make barrel', () => {
  let barrelFilename = 'index.ts' // `${config.package_config.name}.ts`;
  let exportPath = posixJoin('./', config.OUT_DIR, 'index');
  let buffer = `export * from './${exportPath}';`;

  try {
  let srcBarrelBuffer = fs.readFileSync('src/index.ts', 'utf8')
  let buffer = srcBarrelBuffer.replace(/'\.\/(.+)'/gi, `'./${config.package_config.name}/$1'`)
  return fs.writeFileSync(join('.', barrelFilename), buffer);
  } catch(ex) {
    throw ex
  }
});