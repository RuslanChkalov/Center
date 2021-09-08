ALTER TABLE doctors
    DROP CONSTRAINT doctors_speciality_fkey,
    ADD FOREIGN KEY (speciality)
        REFERENCES specialities (id)
        ON DELETE SET NULL;

ALTER TABLE schedule
    DROP CONSTRAINT schedule_doctor_fkey,
    ADD FOREIGN KEY (doctor)
        REFERENCES doctors (id)
        ON DELETE CASCADE;

ALTER TABLE registration_requests
    DROP CONSTRAINT registration_requests_id_fkey,
    ADD FOREIGN KEY (id)
        REFERENCES schedule (appointment_id)
        ON DELETE CASCADE;

ALTER TABLE specialities_to_directions
    DROP CONSTRAINT specialities_to_directions_medical_direction_id_fkey,
    DROP CONSTRAINT specialities_to_directions_speciality_id_fkey,
    ADD FOREIGN KEY (speciality_id)
        REFERENCES specialities (id)
        ON DELETE CASCADE,
    ADD
        FOREIGN KEY (medical_direction_id)
        REFERENCES medical_directions (id)
        ON DELETE CASCADE;