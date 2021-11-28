'use strict';

const moment = require('moment');

let dbm;
let type;
let seed;

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
  db.createTable('users', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      email: { type: 'string', notNull: true, unique: true },
      username: { type: 'string', notNull: true, unique: true },
      firstname: { type: 'string', notNull: true, unique: true },
      lastname: { type: 'string', notNull: true, unique: true },
      phone: { type: 'string', notNull: true, unique: true },
      role_id:{
        type: 'int',
        notNull: true,
        foreignKey: {
          name: 'users_role_id_fk',
          table: 'roles',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: {
            role_id: 'id'
          }
        }
      },
      password: { type: 'string', notNull: true },
      email_confirmed_at: { type: 'timestamp', notNull: false, },
      created_at: { type: 'string', notNull: true },
      updated_at: { type: 'string', notNull: true },
    },
    ifNotExists: true
  }, callback);
};

exports.down = function (db) {
  db.dropTable('users');
};

exports._meta = {
  "version": 1
};
