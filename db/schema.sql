create table users (
  id  integer primary key autoincrement not null,
  first_name text,
  last_name text,
  email text
);

insert into users (first_name, last_name, email) values ('Guy', 'Brush', 'guy.brush@monkey-island.com')