package com.medicalcenter.repositories;

import com.medicalcenter.entities.MedicalDirection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;
import java.util.Set;

public interface MedicalDirectionRepository extends PagingAndSortingRepository<MedicalDirection, Long> {
    List<MedicalDirection> findAll();
    Page<MedicalDirection> findAll(Pageable pageable);
    Set<MedicalDirection> findById(long value);
}