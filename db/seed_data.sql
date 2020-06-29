-- INSERT INTO TABLE LOGIC

-- First insert into plants:

insert into plants
(
common_name,
scientific_name,
plant_pic,
description,
hardiness, 
exposure,
selected
)
values
(
'Burning Bush',
'Euonymus alatus',
'https://www.gardenia.net/storage/app/public/uploads/images/detail/6100845_m.jpg',
'mounded, multi-stemmed shrub noted for its fiery red fall color',
'Zones 2-16', 
'Sun - Part Sun',
false
);

-- Then insert into plant_dates with new plant_id:

insert into plant_dates
(
plant_id,
spring_planting_date,
fertilize_date_1,
fertilize_type_1,
fertilize_date_2,
fertilize_type_2,
fertilize_date_3,
fertilize_type_3,
bloom_date,
treatment_date_1,
treatment_type_1,
treatment_date_2,
treatment_type_2,
spent_date,
prune_date,
fall_planting_date
)
values
(
#,
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


-- AZALEAS

insert into plants (
common_name,
scientific_name,
plant_pic,
description,
hardiness, 
exposure,
selected
)
values
(
'Azalea',
'rhododendron',
'https://www.waysidegardens.com/images/xxl/25833.jpg?v=101222518075-1',
'a deciduous flowering shrub of the heath family with clusters of brightly colored flowers, smaller than most other rhododendrons',
'Zones 4-9', 
'Part Sun',
false
);

-- BLACK-EYED SUSANS

insert into plants
(
common_name,
scientific_name,
plant_pic,
description,
hardiness, 
exposure,
selected
)
values
(
'Black-eyed Susans (perennial',
'Rudbeckia fulgida',
'https://bluestoneperennials.global.ssl.fastly.net/img/RUGO/650/RUGO_0a_rudbeckia_goldstrum_7260011.1490713302.jpg',
'orange perennial coneflower in the family Asteraceae, native to eastern North America',
'Zones 5-9', 
'Sun - Part Sun',
false
);

-- BLEEDING HEART

insert into plants
(
common_name,
scientific_name,
plant_pic,
description,
hardiness, 
exposure,
selected
)
values
(
'Bleeding Heart',
'Lamprocapnos spectabilis',
'https://www.wholesalenurseryco.com/product_images/uploaded_images/van-zyverden-perennials-83527-64-1000.jpg',
'perennial, woodland bush that blooms with heart-shaped drop flowers',
'Zones 2-9', 
'Shade',
false
);

-- BURNING BUSH

insert into plants
(
common_name,
scientific_name,
plant_pic,
description,
hardiness, 
exposure,
selected
)
values
(
'Burning Bush',
'Euonymus alatus',
'https://www.gardenia.net/storage/app/public/uploads/images/detail/6100845_m.jpg',
'mounded, multi-stemmed shrub noted for its fiery red fall color',
'Zones 2-16', 
'Sun - Part Sun',
false
);

