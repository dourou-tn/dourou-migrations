'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('job_types', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      name: { type: 'string', notNull: true },
      created_at: { type: 'timestamp', notNull: true },
    },
    ifNotExists: true
  }, callback);
};

exports.down = function (db) {
  db.dropTable('job_types');
};

exports._meta = {
  "version": 1
};
