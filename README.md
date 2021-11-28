# Dourou Migrations
All migrations for **dourou.tn**.

**TODOS**
- [ ] Environment variables in database.json


## 1. Roles
     - id
     - name
     - color
     - created_at
     - updated_at

## 2. Users
     - id
     - email
     - username
     - firstname
     - lastname
     - phone
     - role_id
     - password
     - email_confirmed_at
     - created_at
     - updated_at


## Deploy
---------

https://db-migrate.readthedocs.io/en/latest/Getting%20Started/installation/

  ```
  Usage: db-migrate [up|down|reset|create|db] [[dbname/]migrationName|all] [options]

  yarn migrate [up|down|reset|create|db] [[dbname/]migrationName|all] [options]
  ```
---------
