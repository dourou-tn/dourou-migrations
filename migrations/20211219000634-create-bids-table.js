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
  db.createTable('bids', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      user_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'bids_user_id_fk',
          table: 'users',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: {
            user_id: 'id'
          }
        }
      },
      auction_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'bids_auction_id_fk',
          table: 'auctions',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: {
            auction_id: 'id'
          }
        }
      },
      price: { type: 'float', notNull: true },
      created_at: { type: 'string', notNull: true },
    },
    ifNotExists: true
  }, callback);
};

exports.down = function (db) {
  db.dropTable('bids');
};

exports._meta = {
  "version": 1
};
