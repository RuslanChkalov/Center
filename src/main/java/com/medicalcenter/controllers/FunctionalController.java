package com.medicalcenter.controllers;

import com.medicalcenter.dto.DoctorDTO;
import com.medicalcenter.dto.MedicalDirectionDTO;
import com.medicalcenter.entities.QDoctor;
import com.medicalcenter.entities.MedicalDirection;
import com.medicalcenter.entities.QMedicalDirection;
import com.medicalcenter.repositories.DoctorRepository;
import com.medicalcenter.repositories.MedicalDirectionRepository;
import com.querydsl.core.types.dsl.BooleanExpression;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
public class FunctionalController {
    @Autowired
    private MedicalDirectionRepository medicalDirectionRepository;
    @Autowired
    private DoctorRepository doctorRepository;


    @RequestMapping(value = "/requests/directions", method = RequestMethod.GET, produces = "application/json")
    public List<MedicalDirectionDTO> getDirection(@RequestParam(value = "page", required = false) Integer page) {
        Pageable param = Pageable.unpaged();
        if (page != null)
            param = PageRequest.of(page, 9);

        return medicalDirectionRepository.findAll(param).stream()
                .map(MedicalDirectionDTO::new)
                .collect(Collectors.toList());
    }

    @RequestMapping(value = "/requests/doctors", method = RequestMethod.GET, produces = "application/json")
    public List<DoctorDTO> getDoctors(@RequestParam(value = "directionId", required = false, defaultValue = "-1") String id,
                                      @RequestParam(value = "fio", required = false, defaultValue = "") String fio,
                                      @RequestParam(value = "page", required = false, defaultValue = "0") Integer page) {

        QDoctor doctor = QDoctor.doctor;
        QMedicalDirection direction = QMedicalDirection.medicalDirection;

        BooleanExpression finalSearch = doctor.name.containsIgnoreCase(fio);

        if (!id.equals("-1")) {
            Iterable<MedicalDirection> directions = medicalDirectionRepository.findAll(direction.id.like(id));
            BooleanExpression searchById = doctor.speciality.suitableMedicalDirections.contains(directions.iterator().next());
            finalSearch = finalSearch.and(searchById);
        }

        return doctorRepository.findAll(finalSearch, PageRequest.of(page, 6)).stream()
                .map(DoctorDTO::new)
                .collect(Collectors.toList());
    }
}
