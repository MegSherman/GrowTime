select common_name, scientific_name, plant_pic
from plants
where common_name ilike ('%'||'$1'||'%') 
or scientific_name ilike ('%'||'$1'||'%');