package com.medicalcenter.controllers;

import com.medicalcenter.dto.DoctorDTO;
import com.medicalcenter.dto.MedicalDirectionDTO;
import com.medicalcenter.entities.Doctor;
import com.medicalcenter.entities.MedicalDirection;
import com.medicalcenter.repositories.DoctorRepository;
import com.medicalcenter.repositories.MedicalDirectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
        Page<MedicalDirection> directions = null;
        if (page == -1) {
            directions = medicalDirectionRepository.findAll(Pageable.unpaged());
        } else {
            directions = medicalDirectionRepository.findAll(PageRequest.of(page, 9));
        }
        return directions.stream()
                .map(MedicalDirectionDTO::new)
                .collect(Collectors.toList());
    }

    @RequestMapping(value = "/requests/doctors", method = RequestMethod.GET, produces = "application/json")
    public List<DoctorDTO> getDoctors(@RequestParam(value = "directionId", required = false) Integer id,
                                      @RequestParam(value = "fio", required = false) String fio,
                                      @RequestParam(value = "page", required = false) Integer page) {
        if (id == null) {
            id = -1;
        }

        Page<Doctor> doctors = null;

        if (fio != null & id != -1) {
            doctors = doctorRepository.findByNameContainingIgnoreCaseAndSpeciality_SuitableMedicalDirectionsIn(fio,
                    medicalDirectionRepository.findById(id), PageRequest.of(page, 6));
        } else if (fio != null) {
            doctors = doctorRepository.findByNameContainingIgnoreCase(fio, PageRequest.of(page, 6));
        } else if (id != -1) {
            doctors = doctorRepository.findBySpeciality_SuitableMedicalDirectionsIn(
                    medicalDirectionRepository.findById(id), PageRequest.of(page, 6));
        } else {
            doctors = doctorRepository.findAll(PageRequest.of(page, 6));
        }

        return doctors.stream()
                .map(DoctorDTO::new)
                .collect(Collectors.toList());
    }
}
