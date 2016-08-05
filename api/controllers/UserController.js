/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  search: function(req, res) {
    'use strict';

    User.count().exec(function(err, found){
      if (err) {
        return res.negotiate(err);
      }
      if (!found) {
        return res.notFound();
      }
      User.find({
        or : [
          {
            name: {
              'contains': req.param('searchCriteria')
            },
          },
          {
            title: {
              'contains': req.param('searchCriteria')
            }
          }
        ],
        limit: 10
      })
      .populate('projects')
      .exec(function(err, users){
        if (req.wantsJSON) {
          return res.json({
            options: {
              totalUsers: found,
              updatedUsers: users
            }
          });
        } else {
          res.view({
            users: users,
            user: 'User Administration'});
        }
      });
    });
  },
  show: function(req, res, next){
    'use strict';
    User.findOne({cleanName: req.param('cleanName') })
      .populate('projects')
      .then(function (user) {
        return [user, user.projects];
      })
      .spread(function (user) {
        res.view({user: user, userTitle: user.title});
      })
      .fail(function(err){
        if (err) {
          return next(err);
        }
        res.redirect('/');
      });
  },
  index: function(req, res, next) {
    'use strict';
    User.find()
    .exec(function (err, users) {
      if (err) {
        return next(err);
      }

      res.view({users: users, userTitle: 'User Administration'});
    });
  },
  getUsers: function(req, res, next) {
    'use strict';
    User.find().exec(function (err, users) {
      if (err) {
        return next(err);
      }

      res.json({users: users});
    });
  },
  'new': function (req, res, next) {
    'use strict';
    var user = { 'name': '', 'title': '', cleanName: ''};
    Project.find()
    .exec(function(err, projects){
      if (err) {
        return next(err);
      }
      res.view({
        userTitle: 'New User',
        user: user,
        projects: projects,
        error: err
      });
    });
  },
  create: function (req, res, next) {
    'use strict';
    User.create(req.params.all(), function (err, user) {
      if (err) {
        return next(err);
      }
      Project.find()
      .populate('users')
      .exec(function(err, allProjects){
        User.find()
        if (err) {
          return next(err);
        }

        var addList = req.param('addProjects') || [];

        for (let value of allProjects) {
          if (addList.indexOf(value.id.toString()) === -1){
            user.projects.remove(value.id);
          }
        }

        user.projects.add(req.param('addProjects'));

        user.save(function(err, updatedUser){

          if (err) {
            // TODO: This is throwing and error that I don't understand. Additionally, association changes don't appear until refresh.
            console.log("Error: ", err);
          }
          return res.redirect('user/'+ user.cleanName);
        });
      });
    });
  },
  edit: function(req, res, next) {
    'use strict';
    User.findOne({cleanName: req.param('cleanName') })
    .populate('projects')
    .exec(function(err, user){
      Project.find()
      .populate('users')
      .exec(function(err, projects) {
        if (err){
          return next(err);
        }
        user = user || {};
        console.log("user.projects in edit: ", user.projects);
        res.view({
          userTitel: 'Edit User - '+user.title,
          user: user,
          projects: projects,
          error: err
        });
      });
    });
  },
  update: function(req, res, next) {
    'use strict';

    User.findOne({cleanName: req.param('cleanName')}, function (err, user){
      if (err) {
        return next(err);
      }
      Project.find()
      .populate('users')
      .exec(function(err, allProjects){
        User.find()
        if (err) {
          return next(err);
        }

        var addList = req.param('addProjects') || [];

        for (let value of allProjects) {
          if (addList.indexOf(value.id.toString()) === -1){
            user.projects.remove(value.id);
          }
        }

        user.projects.add(req.param('addProjects'));

        user.save(function(err, savedUser){

          if (err) {
            // TODO: This is throwing and error that I don't understand. Additionally, association changes don't appear until refresh.
            console.log("Error: ", err);
          }
          User.update({cleanName: req.param('cleanName')}, req.params.all(), function (err, users){
            res.redirect('/user/' + users[0].cleanName);
          });
        });
      });
    });
  },
  destroy: function(req, res, next) {
    'use strict';
    User.findOne({cleanName: req.param('cleanName') }).exec(function(err, user){
      if (err){
        return next(err);
      }
      user = user || {};

      user.destroy(function (err) {
        res.redirect('/user');
      });
    });
  }
};
