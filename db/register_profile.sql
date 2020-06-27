insert into growtime_profiles
(first_name, last_name, email, phone, city, state)
values
($1, $2, $3, $4, $5, $6)
returning *;
