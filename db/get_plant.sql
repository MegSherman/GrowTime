select * from plants p
join plant_dates pd on p.id = pd.plant_id
where p.id = $1