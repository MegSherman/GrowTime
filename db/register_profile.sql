insert into growtime_profiles
(user_id, first_name, last_name, email, phone, city, state)
values
($1, $2, $3, $4, $5, $6, $7)
returning *;
