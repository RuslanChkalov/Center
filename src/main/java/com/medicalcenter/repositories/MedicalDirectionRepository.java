package com.medicalcenter.repositories;

import com.medicalcenter.entities.MedicalDirection;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface MedicalDirectionRepository extends PagingAndSortingRepository<MedicalDirection, Long>, QuerydslPredicateExecutor<MedicalDirection> {

}