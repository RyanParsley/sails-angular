/**
 * `copy`
 *
 * ---------------------------------------------------------------
 *
 * Copy files and/or folders from your `assets/` directory into
 * the web root (`.tmp/public`) so they can be served via HTTP,
 * and also for further pre-processing by other Grunt tasks.
 *
 * #### Normal usage (`sails lift`)
 * Copies all directories and files (except CoffeeScript and LESS)
 * from the `assets/` folder into the web root -- conventionally a
 * hidden directory located `.tmp/public`.
 *
 * #### Via the `build` tasklist (`sails www`)
 * Copies all directories and files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-copy
 *
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config.set('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: './client/app',
        src: [
          '**/*.html',
          '**/*.css'
        ],
        dest: '.tmp/public/js/client/app'
      },{
        expand: true,
        cwd: './assets',
        src: ['**/*.!(coffee|less|scss)'],
        dest: '.tmp/public'
      },{
        expand: true,
        cwd: './vendor',
        src: [
          'jquery/dist/jquery.min.js'
        ],
        flatten: true,
        dest: '.tmp/public/js/dependencies'
      }]
    },
    build: {
      files: [{
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
