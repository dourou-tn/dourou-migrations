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
      type_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'jobs_type_id_fk',
          table: 'job_types',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: {
            type_id: 'id'
          }
        }
      },
      state_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'jobs_state_id_fk',
          table: 'job_states',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: {
            state_id: 'id'
          }
        }
      },
      auction_id: {
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'jobs_auction_id_fk',
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
      start_date: { type: 'timestamp', notNull: false },
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
