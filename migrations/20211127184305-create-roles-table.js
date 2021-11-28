'use strict';

const moment = require('moment');

let dbm;
let type;
let seed;

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
  db.createTable('roles', {
    columns: {
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      name: { type: 'string', notNull: true, unique: true },
      color: { type: 'string', unique: true },
      created_at: { type: 'string', notNull: true },
      updated_at: { type: 'string', notNull: true },
    },
    ifNotExists: true
  }, callback);
};

exports.down = function (db) {
  db.dropTable('roles');
};

exports._meta = {
  "version": 1
};
