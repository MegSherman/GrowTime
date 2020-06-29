select u.username, u.admin, 
p.first_name, p.last_name, p.email, p.phone, p.city, p.state
from growtime_users u
join growtime_profiles p on u.id = p.user_id
where u.username = $1;