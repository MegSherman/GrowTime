-- TABLE SETUP

create table growtime_users (
id serial primary key,
username varchar(25) not null,
password text not null,
admin boolean default false
);

create table growtime_profiles (
id serial primary key,
user_id integer references growtime_users(id),
first_name varchar(30) not null,
last_name varchar(30) not null,
email varchar(50) not null,
phone varchar(14) not null,
city varchar(40) not null,
state varchar(2) not null
);

create table plants (
id serial primary key,
common_name text,
scientific_name text,
plant_pic text,
description varchar(200),
hardiness text,
exposure text,
selected boolean default false
);

create table plant_dates (
id serial primary key,
plant_id integer references plants(id),
spring_planting_date date,
fertilize_date_1 date,
fertilize_type_1 varchar(30),
fertilize_date_2 date,
fertilize_type_2 varchar(30),
fertilize_date_3 date,
fertilize_type_3 varchar(30),
bloom_date date,
treatment_date_1 date,
treatment_type_1 varchar(30),
treatment_date_2 date,
treatment_type_2 varchar(30),
spent_date date,
prune_date date,
fall_planting_date date
);



create table user_plant_dates (
id serial primary key,
user_id integer references growtime_users(id),
plant_id integer references plants(id),
spring_planting_date date,
fertilize_date_1 date,
fertilize_type_1 varchar(30),
fertilize_date_2 date,
fertilize_type_2 varchar(30),
fertilize_date_3 date,
fertilize_type_3 varchar(30),
bloom_date date,
treatment_date_1 date,
treatment_type_1 varchar(30),
treatment_date_2 date,
treatment_type_2 varchar(30),
spent_date date,
prune_date date,
fall_planting_date date
);

-- Test Data Default Dates

(
'2020-04-15',
'2020-04-15',
'general purpose',
'2020-06-15',
'flowering shrubs',
'2020-08-15',
'general purpose',
'2020-06-30',
'2020-05-30',
'snail bait',
'2020-06-30',
'mulch',
'2020-10-01',
'2020-10-15',
'2020-09-15'
);

-- QUERIES

-- check_email
select * from growtime_profiles
where email = $1;

-- check_username
select * from growtime_users
where username = $1;

-- register_user
insert into growtime_users
(username, password)
values ($1, $2);


-- register_profile
insert into growtime_profile
(first_name, last_name, email, phone, city, state)
values
($3, $4, $5, $6, $7, $8);

--get plants
select * from plants;

-- get_plants_filter
select common_name, scientific_name, plant_pic
from plants
where common_name ilike ('%'||'$1'||'%') 
or scientific_name ilike ('%'||'$1'||'%');

-- FAILED ATTEMPTS AT DOUBLE INSERT

-- First Example

-- WITH ins1 AS (
--   INSERT INTO sample(firstname, lastname)
--   VALUES ('fai55', 'shaggk')
-- -- ON     CONFLICT DO NOTHING         -- optional addition in Postgres 9.5+
--   RETURNING id AS sample_id
--   )
-- , ins2 AS (
--   INSERT INTO sample1 (sample_id, adddetails)
--   SELECT sample_id, 'ss' FROM ins1
--   RETURNING user_id
-- --   )
-- -- INSERT INTO sample2 (user_id, value)
-- -- SELECT user_id, 'ss2' FROM ins2;

-- Attempt 1

-- with ins1 as (
-- insert into plants
-- (
-- common_name,
-- scientific_name,
-- plant_pic,
-- description,
-- hardiness, 
-- exposure
-- )
-- values (
-- 'Azalea',
-- 'rhododendron',
-- 'https://www.waysidegardens.com/images/xxl/25833.jpg?v=101222518075-1',
-- 'a deciduous flowering shrub of the heath family with clusters of brightly colored flowers, smaller than most other rhododendrons',
-- 'Zones 4-9', 
-- 'Part Sun'
-- )
-- returning id as plant_id
-- )
-- , ins2 as (
-- insert into plant_dates 
-- (plant_id,
-- spring_planting_date,
-- fertilize_date_1,
-- fertilize_type_1,
-- fertilize_date_2,
-- fertilize_type_2,
-- fertilize_date_3,
-- fertilize_type_3,
-- bloom_date,
-- treatment_date_1,
-- treatment_type_1,
-- treatment_date_2,
-- treatment_type_2,
-- spent_date,
-- prune_date,
-- fall_planting_date
-- )
-- select plant_id, 
-- '2020-04-15',
-- '2020-04-15',
-- 'general purpose',
-- '2020-06-15',
-- 'flowering shrubs',
-- '2020-08-15',
-- 'general purpose',
-- '2020-06-30',
-- '2020-05-30',
-- 'snail bait',
-- '2020-06-30',
-- 'mulch',
-- '2020-10-01',
-- '2020-10-15',
-- '2020-09-15' from ins1
-- );

-- Attempt 2

-- with data (
-- common_name,
-- scientific_name,
-- plant_pic,
-- description,
-- hardiness, 
-- exposure,
-- spring_planting_date,
-- fertilize_date_1,
-- fertilize_type_1,
-- fertilize_date_2,
-- fertilize_type_2,
-- fertilize_date_3,
-- fertilize_type_3,
-- bloom_date,
-- treatment_date_1,
-- treatment_type_1,
-- treatment_date_2,
-- treatment_type_2,
-- spent_date,
-- prune_date,
-- fall_planting_date
-- )
-- as (values
-- (
-- 'Azalea',
-- 'rhododendron',
-- 'https://www.waysidegardens.com/images/xxl/25833.jpg?v=101222518075-1',
-- 'a deciduous flowering shrub of the heath family with clusters of brightly colored flowers, smaller than most other rhododendrons',
-- 'Zones 4-9', 
-- 'Part Sun'
-- '2020-04-15',
-- '2020-04-15',
-- 'general purpose',
-- '2020-06-15',
-- 'flowering shrubs',
-- '2020-08-15',
-- 'general purpose',
-- '2020-06-30',
-- '2020-05-30',
-- 'snail bait',
-- '2020-06-30',
-- 'mulch',
-- '2020-10-01',
-- '2020-10-15',
-- '2020-09-15'
-- )
-- )
-- , ins1 as (
-- insert into plants (
-- common_name,
-- scientific_name,
-- plant_pic,
-- description,
-- hardiness, 
-- exposure
-- )
-- select 
-- common_name,
-- scientific_name,
-- plant_pic,
-- description,
-- hardiness, 
-- exposure
-- from data
-- returning
-- common_name,
-- scientific_name,
-- plant_pic,
-- description,
-- hardiness, 
-- exposure,
-- id as plant_id
-- )
-- , ins2 as (
-- insert into plant_dates
-- (
-- spring_planting_date,
-- fertilize_date_1,
-- fertilize_type_1,
-- fertilize_date_2,
-- fertilize_type_2,
-- fertilize_date_3,
-- fertilize_type_3,
-- bloom_date,
-- treatment_date_1,
-- treatment_type_1,
-- treatment_date_2,
-- treatment_type_2,
-- spent_date,
-- prune_date,
-- fall_planting_date
-- )
-- select 
-- ins1.plant_id,
-- d.spring_planting_date,
-- d.fertilize_date_1,
-- d.fertilize_type_1,
-- d.fertilize_date_2,
-- d.fertilize_type_2,
-- d.fertilize_date_3,
-- d.fertilize_type_3,
-- d.bloom_date,
-- d.treatment_date_1,
-- d.treatment_type_1,
-- d.treatment_date_2,
-- d.treatment_type_2,
-- d.spent_date,
-- d.prune_date,
-- d.fall_planting_date
-- from data d
-- join ins1 using (common_name, scientific_name)
-- );

-- Third Example

-- INSERT INTO groupmember (person_id, group_id)
-- SELECT p.person_id, g.group_id
-- FROM  (
--   VALUES
--      ('alice'::varchar, 'girls'::varchar)
--   , ('bob','boys',
--   , ('alice','coolkids')
--   , ('bob','coolkids')
--   ) x (username, group_name)
-- JOIN   person p  USING (username)
-- JOIN   "group" g USING (group_name);

