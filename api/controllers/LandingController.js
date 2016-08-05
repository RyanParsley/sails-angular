/**
 * LandingController
 *
 * @description :: Server-side logic for managing landings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res, next) {
    'use strict';

    User.find({limit: 3, sort: 'updatedAt DESC'}).exec(function (err, users) {
      if (err) {
        return next(err);
      }

      Project.find({limit: 3, sort: 'updatedAt DESC'}).exec(function (err, projects) {
        User.find({limit: 3, sort: 'createdAt DESC'}).exec(function (err, users) {
          if (err) {
            return next(err);
          }

          Project.find({limit: 3, sort: 'createdAt DESC'}).exec(function (err, projects) {
            if (err) {
              return next(err);
            }

            users.map(function(obj){
              obj.type = 'user';
            });

            projects.map(function(obj){
              obj.type = 'project';
            });

            res.view({users: users, projects: projects});
          });
        });
      });
    });
  }
};
