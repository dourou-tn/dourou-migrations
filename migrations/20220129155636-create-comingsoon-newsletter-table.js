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
  db.createTable('comingsoon_newsletter', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      email: { type: 'string', notNull: true },
      is_registred: { type: 'boolean', defaultValue: false },
      created_at: { type: 'string', notNull: true },
      updated_at: { type: 'string', notNull: true }
    },
    ifNotExists: true
  }, callback);
};

exports.down = function (db) {
  db.dropTable('comingsoon_newsletter');
};

exports._meta = {
  "version": 1
};
