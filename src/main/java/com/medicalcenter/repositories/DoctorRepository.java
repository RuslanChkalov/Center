package com.medicalcenter.repositories;

import com.medicalcenter.entities.Doctor;
import com.medicalcenter.entities.MedicalDirection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Set;

public interface DoctorRepository extends PagingAndSortingRepository<Doctor, Long> {
    Page<Doctor> findAll(Pageable pageable);
    Page<Doctor> findBySpeciality_SuitableMedicalDirectionsIn(Set<MedicalDirection> speciality_suitableMedicalDirections, Pageable pageable);
    Page<Doctor> findByNameContainingIgnoreCase(String name, Pageable pageable);
    Page<Doctor> findByNameContainingIgnoreCaseAndSpeciality_SuitableMedicalDirectionsIn(String name, Set<MedicalDirection> speciality_suitableMedicalDirections, Pageable pageable);
}
