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
  db.createTable('auction_user', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      auction_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'auction_user_auction_id_fk',
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
      user_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'auction_user_user_id_fk',
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
      created_at: { type: 'string', notNull: true },
      updated_at: { type: 'string', notNull: true }
    },
    ifNotExists: true
  }, callback);
};

exports.down = function (db) {
  db.dropTable('auction_user');
};

exports._meta = {
  "version": 1
};
