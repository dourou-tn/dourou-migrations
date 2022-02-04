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
  db.createTable('jobs', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      uiid: { type: 'string', notNull: true },
      type: { type: 'string', notNull: true },
      state: { type: 'string', notNull: true },
      data: { type: 'json', notNull: true },
      created_at: { type: 'timestamp', notNull: false },
      updated_at: { type: 'timestamp', notNull: false }
    },
    ifNotExists: true
  }, callback);
};

exports.down = function (db) {
  db.dropTable('jobs');
};

exports._meta = {
  "version": 1
};
