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
  db.createTable('token_packs_history', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      pack_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'token_packs_history_pack_id_fk',
          table: 'token_packs',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: {
            pack_id: 'id'
          }
        }
      },
      user_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'token_packs_history_user_id_fk',
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
      pay_method: { type: 'string', length: 9, notNull: true},
      created_at: { type: 'string', notNull: true },
      updated_at: { type: 'string', notNull: true }
    },
    ifNotExists: true
  }, callback);
};

exports.down = function (db) {
  db.dropTable('token_packs_history');
};

exports._meta = {
  "version": 1
};
