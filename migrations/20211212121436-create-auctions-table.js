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

exports.up = function (db, callback) {
  db.createTable('auctions', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      description: { type: 'text', notNull: false },
      start_date: { type: 'timestamp', notNull: true },
      product_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'auctions_product_id_fk',
          table: 'products',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: {
            product_id: 'id'
          }
        }
      },
      is_finished: { type: 'boolean', default: false },
      subscribe_price: { type: 'float', notNull: true },
      start_price: { type: 'float', notNull: true },
      max_size: { type: 'int', notNull: true },
      created_at: { type: 'string', notNull: true },
      updated_at: { type: 'string', notNull: true },
    },
    ifNotExists: true
  }, callback);
};

exports.down = function (db) {
  db.dropTable('auctions');
};

exports._meta = {
  "version": 1
};
