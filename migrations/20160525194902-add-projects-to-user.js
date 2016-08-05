'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('user_projects__project_users', {
    id: { type: 'int', primaryKey: true, autoIncrement: true},
    user_projects: 'int',
    project_users: 'int'
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('user_projects__project_users', callback);
};
