package com.medicalcenter.repositories;

import com.medicalcenter.entities.MedicalDirection;
import com.medicalcenter.entities.QDoctor;
import com.querydsl.core.types.dsl.BooleanExpression;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class DoctorRepositoryImpl implements DoctorRepositoryCustom{
    @Autowired
    private MedicalDirectionRepository medicalDirectionRepository;

    @Override
    public BooleanExpression getCondition(String fio, long id) {
        QDoctor doctor = QDoctor.doctor;

        BooleanExpression finalSearch =doctor.isNotNull();
        if (!fio.isEmpty()) {
            finalSearch = doctor.name.containsIgnoreCase(fio);
        }
        Optional<MedicalDirection> directionOptional = medicalDirectionRepository.findById(id);
        if (directionOptional.isPresent()){
            BooleanExpression searchById = doctor.speciality.suitableMedicalDirections.contains(directionOptional.get());
            finalSearch = finalSearch.and(searchById);
        }
        return finalSearch;

    }
}
