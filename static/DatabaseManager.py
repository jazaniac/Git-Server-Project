import web

db = web.database(dbn='sqlite', db='users')

CREATE TABLE users (
  id serial primary key,
  title text,
  created timestamp default now(),
  done boolean default 'f'    );

INSERT INTO user (name) VALUES();