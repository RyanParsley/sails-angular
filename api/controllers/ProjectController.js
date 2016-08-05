/**
 * ProjectController
 *
 * @description :: Server-side logic for managing projects
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  show: function(req, res, next){
    'use strict';
    Project.findOne({cleanName: req.param('cleanName') })
    .populate('users')
    .exec(function(err, project){
      if (err){
        return next(err);
      }
      if (project){
        res.view({project: project, projectName: project.name});
      }else{
        res.send(404);
      }
    });
  },
  index: function(req, res, next) {
    'use strict';
    Project.find().exec(function (err, projects) {
      if (err){
        return next(err);
      }
      res.view({projects: projects, projectName: 'Project Administration'});
    });
  },
  'new': function (req, res, next) {
    'use strict';
    var project = { 'name': '', cleanName: ''};
    return res.view({projectName: 'New Project'});
  },
  create: function (req, res, next) {
    'use strict';
    Project.create(req.params.all(), function (err, project) {
      if (err){
        return next(err);
      }
      res.redirect('project');
    });
  },
  edit: function(req, res, next) {
    'use strict';
    Project.findOne({cleanName: req.param('cleanName') }).exec(function(err, project){
      if (err){
        return next(err);
      }
      project = project || {};
      res.view({
        projectName: 'Edit Project - '+project.name,
        project: project,
        error: err
      });
    });
  },
  update: function(req, res, next) {
    'use strict';
    Project.update({cleanName: req.param('cleanName')}, req.params.all(), function (err, projects){
      if (err){
        return next(err);
      }
      var project = projects[0];
      res.redirect('/project/'+project.cleanName);
    });
  },
  destroy: function(req, res, next) {
    Project.findOne({cleanName: req.param('cleanName') }).exec(function(err, project){
      if (err){
        return next(err);
      }
      project = project || {};

      project.destroy(function (err) {
        res.redirect('/project');
      });
    });
  }
};
