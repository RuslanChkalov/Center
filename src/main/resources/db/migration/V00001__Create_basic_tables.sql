CREATE TABLE specialities
(
    id   INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE doctors
(
    id         INT GENERATED ALWAYS AS IDENTITY,
    name       VARCHAR(50),
    photo_path VARCHAR(50),
    education  VARCHAR(150),
    speciality INT,
    PRIMARY KEY (id),
    FOREIGN KEY (speciality) REFERENCES specialities (id)
);

CREATE TABLE medical_directions
(
    id          INT GENERATED ALWAYS AS IDENTITY,
    name        VARCHAR(50),
    image_path  VARCHAR(50),
    description VARCHAR(150),
    PRIMARY KEY (id)
);

CREATE TABLE specialities_to_directions
(
    speciality_id        INT,
    medical_direction_id INT,
    PRIMARY KEY (speciality_id, medical_direction_id),
    FOREIGN KEY (speciality_id) REFERENCES specialities (id),
    FOREIGN KEY (medical_direction_id) REFERENCES medical_directions (id)
);

CREATE TABLE schedule
(
    appointment_id  INT GENERATED ALWAYS AS IDENTITY,
    date            DATE,
    interval_number INT,
    doctor          INT,
    PRIMARY KEY (appointment_id),
    FOREIGN KEY (doctor) REFERENCES doctors (id)
);

CREATE TABLE registration_requests
(
    id           INT GENERATED ALWAYS AS IDENTITY,
    patient_name VARCHAR(50),
    phone        VARCHAR(20),
    email        VARCHAR(50),
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES schedule (appointment_id)
);