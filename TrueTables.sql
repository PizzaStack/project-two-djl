create table maps(
mapName varchar(255),
description varchar(255),
submitter varchar(255),
file bytea,
status varchar(255),
image bytea,
uploadDate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
primary Key(mapName)
);

create table mapUsers(
username varchar(255),
email varchar(255),
password varchar(255),
joinDate Date NOT NULL DEFAULT CURRENT_DATE,
admin varchar(255),
primary key (username)
);

create table comments(
id SERIAL,
mapName varchar(255),
time timestamp not null default current_timestamp,
comment varchar(255),
username varchar(255),
primary key (id),
foreing key (mapName) REFERENCES maps (mapName)
);

create table votes(
username varchar(255),
mapName varchar(255),
vote smallint,
primary key (username, mapName),
foreign key (username) REFERENCES mapUsers (username),
foreign key (mapName) REFERENCES maps (mapName)
);
