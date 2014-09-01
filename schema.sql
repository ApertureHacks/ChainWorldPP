DROP TABLE IF EXISTS queue;

CREATE TABLE queue (
  username VARCHAR(124) NOT NULL UNIQUE,
  email varchar(124) NOT NULL UNIQUE,
  created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)