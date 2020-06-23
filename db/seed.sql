create table growtime_users (
id serial primary key,
username varchar(25),
password text
);

create table growtime_profiles (
user_id integer references growtime_users(id),
first_name varchar(20),
last_name varchar(30),
email varchar(40),
phone varchar(10),
city varchar(20),
state varchar(20)
);

create table plants (
plant_id serial primary key,
common_name varchar(40),
scientific_name varchar(60),
plant_pic text,
description varchar(200),
hardiness varchar(15),
exposure varchar(20)
);

create table plant_dates (
plant_id integer references plants(plant_id),
planting_date date,
fertilize_date_1 date,
fertilize_date_2 date,
fertilize_date_3 date,
bloom_date date,
treatment_date_1 date,
treatment_type_1 varchar(20),
treatment_date_2 date,
treatment_type_2 varchar(20),
spent_date date,
prune_date date
);
