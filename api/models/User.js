/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var moment = require('moment');
//var marked = require('marked');
var scrub = require('url-seo-scrubber');

module.exports = {
  attributes: {
    name : {
      type: 'string',
      required: true
    },
    title : {
      type: 'string',
      required: true
    },
    cleanName : {
      type: 'string'
    },
    projects : {
      collection: 'project',
      via: 'users',
      dominant: true
    }
  },
  // Lifecycle Callbacks
  beforeCreate: function(values, next) {
    'use strict';
    values.cleanName = scrub(values.name);
    next();
  },
  // Lifecycle Callbacks
  beforeUpdate: function(values, next) {
    'use strict';
    values.cleanName = scrub(values.name);
    next();
  }
};

