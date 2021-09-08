INSERT INTO specialities(name)
VALUES ('Офтальмолог'),
       ('Аллерголог'),
       ('Анестезиолог'),
       ('Гастроэнтеролог'),
       ('Гинеколог'),
       ('Кардиолог'),
       ('Маммолог'),
       ('Невролог'),
       ('Нейрохирург'),
       ('Онколог'),
       ('Оториноларинголог'),
       ('Проктолог'),
       ('Уролог'),
       ('Онкогинеколог'),
       ('Сосудистый хирург'),
       ('Рентгенолог'),
       ('Онкоуролог'),
       ('Колоректальный хирург'),
       ('Акушер-гинеколог'),
       ('Онколог-маммолог'),
       ('Гинеколог-эндоскопист'),
       ('Челюстно-лицевой хирург'),
       ('Кардиохирург'),
       ('Врач УЗИ');

INSERT INTO medical_directions(name, image_path, description)
VALUES ('Офтальмология', '/images/directions/diagnostika.png',
        'Область медицины, изучающая глаз, его анатомию, физиологию и болезни'),
       ('Аллергология', '/images/directions/allergologiya.png',
        'Диагностика и лечение аллергии и аутоимунных заболеваний'),
       ('Анестезиология', '/images/directions/anesteziologiya.png',
        'Местная, спинальная, эпидуральная анестезия и наркоз'),
       ('Гастроэнтерология', '/images/directions/gastroenterologiya.png',
        'Диагностика и лечение заболеваний ЖКТ'),
       ('Гинекология', '/images/directions/ginekologiya.png',
        'Диагностика и лечение заболеваний женской репродуктивной системы'),
       ('Кардиология', '/images/directions/kardiologiya.png',
        'Диагностика и лечение заболеваний сердца'),
       ('Диагностика', '/images/directions/diagnostika.png',
        'МСКТ, УЗИ, рентген'),
       ('Маммология', '/images/directions/mammologiya.png',
        'Диагностика и лечение заболеваний молочной железы'),
       ('Неврология и нейрофизиология', '/images/directions/nevrologiya.png',
        'Диагностика и лечение заболеваний нервной системы'),
       ('Нейрохирургия', '/images/directions/nejrohirurgiya.png',
        'Вопросы оперативного лечения заболеваний и травм нервной системы'),
       ('Онкология', '/images/directions/onkologiya.png',
        'Раздел медицины, изучающий доброкачественные и злокачественные опухоли'),
       ('Оториноларингология', '/images/directions/otorinolaringologiya.png',
        'Диагностка и лечение заболеваний уха, горла, носа'),
       ('Проктология', '/images/directions/default.png',
        'Лечение заболеваний толстой и прямой кишки, операции при геморрое, полипозе, свищах'),
       ('Хирургия', '/images/directions/hirurgia.png',
        'Раздел медицины, который посвящен лечению заболеваний с помощью оперативных методов'),
       ('Урология', '/images/directions/default.png',
        'Диагностика заболеваний органов мочевой системы, половой системы');

CREATE OR REPLACE FUNCTION add_connection(speciality VARCHAR, direction VARCHAR) RETURNS void AS
'
    INSERT INTO specialities_to_directions(speciality_id, medical_direction_id)
    VALUES ((SELECT id
             FROM specialities
             WHERE name = speciality),
            (SELECT id
             FROM medical_directions
             WHERE name = direction));
' LANGUAGE SQL;

SELECT add_connection('Офтальмолог', 'Офтальмология');
SELECT add_connection('Аллерголог', 'Аллергология');
SELECT add_connection('Анестезиолог','Анестезиология');
SELECT add_connection('Гастроэнтеролог', 'Гастроэнтерология');
SELECT add_connection('Гинеколог', 'Гинекология');
SELECT add_connection('Кардиолог','Кардиология');
SELECT add_connection('Маммолог','Маммология');
SELECT add_connection('Невролог','Неврология и нейрофизиология');
SELECT add_connection('Нейрохирург','Нейрохирургия');
SELECT add_connection('Онколог','Онкология');
SELECT add_connection('Оториноларинголог','Оториноларингология');
SELECT add_connection('Проктолог','Проктология');
SELECT add_connection('Уролог','Урология');
SELECT add_connection('Онкогинеколог','Гинекология');
SELECT add_connection('Онкогинеколог','Онкология');
SELECT add_connection('Сосудистый хирург','Кардиология');
SELECT add_connection('Сосудистый хирург','Хирургия');
SELECT add_connection('Рентгенолог','Диагностика');
SELECT add_connection('Онкоуролог','Урология');
SELECT add_connection('Онкоуролог','Онкология');
SELECT add_connection('Колоректальный хирург','Хирургия');
SELECT add_connection('Колоректальный хирург','Проктология');
SELECT add_connection('Акушер-гинеколог','Гинекология');
SELECT add_connection('Онколог-маммолог','Маммология');
SELECT add_connection('Онколог-маммолог','Онкология');
SELECT add_connection('Гинеколог-эндоскопист','Диагностика');
SELECT add_connection('Гинеколог-эндоскопист','Гинекология');
SELECT add_connection('Челюстно-лицевой хирург','Хирургия');
SELECT add_connection('Кардиохирург','Кардиология');
SELECT add_connection('Кардиохирург','Хирургия');
SELECT add_connection('Врач УЗИ','Диагностика');