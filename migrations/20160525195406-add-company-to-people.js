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
  db.createTable('company_people__person_companies', {
    id: { type: 'int', primaryKey: true, autoIncrement: true},
    person_companies: 'int',
    company_people: 'int'
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('company_people__person_companies', callback);
};
