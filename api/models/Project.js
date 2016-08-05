/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var moment = require('moment');
var marked = require('marked');
var scrub = require('url-seo-scrubber');

module.exports = {
  attributes: {
    name : {
      type: 'string',
      required: true
    },
    description : {
      type: 'string'
    },
    processedDescription: function () {
      'use strict';
      if(this.markup === 'markdown'){
        return marked(this.description);
      }else{
        // if markup == 'html'
        return this.description;
      }
    },
    users : {
      collection: 'user',
      via: 'projects'
    },
    descriptionHTML: function(){
      'use strict';
      return marked(this.description);
    },
    markup : {
      type: 'string',
      defaultsTo: 'markdown'
    },
    cleanName : {
      type: 'string'
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

