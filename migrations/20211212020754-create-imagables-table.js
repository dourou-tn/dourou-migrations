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
  db.createTable('imagables', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      imagable_type: { type: 'string', notNull: true },
      imagable_id: { type: 'int', notNull: true },
      image_path: { type: 'string', notNull: true },
      image_name: { type: 'string', notNull: true },
      created_at: { type: 'string', notNull: true },
      updated_at: { type: 'string', notNull: true },
    },
    ifNotExists: true
  }, callback);
};

exports.down = function(db) {
  db.dropTable('imagables');
};

exports._meta = {
  "version": 1
};
