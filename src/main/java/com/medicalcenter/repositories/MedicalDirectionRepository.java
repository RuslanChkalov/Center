package com.medicalcenter.repositories;

import com.medicalcenter.entities.Doctor;
import com.medicalcenter.entities.MedicalDirection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.Set;

public interface MedicalDirectionRepository extends PagingAndSortingRepository<MedicalDirection, Long>, QuerydslPredicateExecutor<MedicalDirection> {
    Page<MedicalDirection> findAll(Pageable pageable);
    Set<MedicalDirection> findById(long value);
}