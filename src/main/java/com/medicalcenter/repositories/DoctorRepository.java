package com.medicalcenter.repositories;

import com.medicalcenter.entities.Doctor;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;


public interface DoctorRepository extends CrudRepository<Doctor, Long>, QuerydslPredicateExecutor<Doctor>{

}
