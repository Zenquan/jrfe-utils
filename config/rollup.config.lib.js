// rollup.config.js
// umd
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var uglify = require('rollup-plugin-uglify');

var common = require('./rollup.js');

var prod = process.env.NODE_ENV === 'production';

module.exports = {
    input: {
      index: 'src/index.js',
      Mime: 'src/Mime.js',
    },
    output: [{
        file: prod ? 'lib/index.min.js' : 'lib/index.js',
        format: 'es',
    }, {
      file: prod ? 'lib/Mime.min.js' : 'lib/Mime.js',
      format: 'es',
    }],
    plugins: [
        nodeResolve({
            main: true,
            extensions: ['.js']
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        common.getCompiler(),
        (prod && uglify())
    ]
};
