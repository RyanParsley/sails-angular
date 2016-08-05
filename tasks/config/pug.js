module.exports = function(grunt) {
  'use strict';
  grunt.config.set('pug', {
    compile: {
      options: {
        data: {
          debug: false
        }
      },
      files: [
        {
          cwd: 'client/app',
          src: '**/*.component.pug',
          dest: '.tmp/public/js/client/app',
          expand: true,
          ext: '.component.html'
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-pug');
};
