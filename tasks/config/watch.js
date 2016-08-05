/**
 * `watch`
 *
 * ---------------------------------------------------------------
 *
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * Watch for changes on:
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config.set('watch', {
    assets: {

      // Assets to watch:
      files: ['assets/**/*', 'tasks/pipeline.js', '!**/node_modules/**', 'client/**/*.{css,html}'],

      // When assets are changed:
      tasks: ['syncAssets' , 'linkAssets' ],
      options: {
        livereload: true
      }
    },
    ts: {

      // Assets to watch:
      files: ['client/**/*.ts'],

      // When assets are changed:
      tasks: ['ts' ],
      options: {
        livereload: true
      }
    },
    pug: {

      // Assets to watch:
      files: ['client/**/*.component.pug'],

      // When assets are changed:
      tasks: ['pug' ],
      options: {
        livereload: true
      }
    },
    test: {

      // Assets to watch:
      files: ['assets/**/*.js', 'api/**/*.js', '!**/node_modules/**'],

      // When assets are changed:
      tasks: ['coverage' ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
