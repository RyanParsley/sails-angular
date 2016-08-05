module.exports = function(grunt) {
  'use strict';
  grunt.config.set('ts', {
    default : {
      src: ['client/main.ts'],
      outDir: ['.tmp/public/js/client'],
      tsconfig: 'tsconfig.json'
    }
  });
  grunt.loadNpmTasks('grunt-ts');
};
