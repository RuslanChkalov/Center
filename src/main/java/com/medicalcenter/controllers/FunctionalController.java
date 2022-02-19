package com.medicalcenter.controllers;

import com.medicalcenter.dto.DoctorDTO;
import com.medicalcenter.dto.MedicalDirectionDTO;
import com.medicalcenter.repositories.DoctorRepository;
import com.medicalcenter.repositories.MedicalDirectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@RestController
public class FunctionalController {
    @Autowired
    private MedicalDirectionRepository medicalDirectionRepository;
    @Autowired
    private DoctorRepository doctorRepository;


    @RequestMapping(value = "/requests/directions", method = RequestMethod.GET, produces = "application/json")
    public List<MedicalDirectionDTO> getDirection(@RequestParam(value = "page", required = false) Integer page) {

       Pageable param =Optional.ofNullable(page).isPresent() ? PageRequest.of(page, 9) : Pageable.unpaged();

        return medicalDirectionRepository.findAll(param).stream()
                .map(MedicalDirectionDTO::new)
                .collect(Collectors.toList());
    }

    @RequestMapping(value = "/requests/doctors", method = RequestMethod.GET, produces = "application/json")
    public List<DoctorDTO> getDoctors(@RequestParam(value = "directionId", required = false, defaultValue = "-1") long id,
                                      @RequestParam(value = "fio", required = false, defaultValue = "") String fio,
                                      @RequestParam(value = "page", required = false, defaultValue = "0") int page) {

        return doctorRepository.findAll(doctorRepository.getCondition(fio, id), PageRequest.of(page, 6)).stream()
                .map(DoctorDTO::new)
                .collect(Collectors.toList());
    }
}
