module.exports = function(grunt) {
  'use strict';
  var config = require('../../webpack.config.js');

  grunt.config.set('webpack', {
    main: config
  });

  grunt.loadNpmTasks('grunt-webpack');
};
