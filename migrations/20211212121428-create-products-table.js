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
  db.createTable('products', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      name: { type: 'string', notNull: true },
      slug: { type: 'string', notNull: true, unique: true },
      price: { type: 'float', notNull: true },
      description: { type: 'text', notNull: false },
      created_at: { type: 'string', notNull: true },
      updated_at: { type: 'string', notNull: true },
    },
    ifNotExists: true
  }, callback);
};

exports.down = function(db) {
  db.dropTable('products');
};

exports._meta = {
  "version": 1
};
