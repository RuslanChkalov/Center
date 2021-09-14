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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.stream.Collectors;


@RestController
public class FunctionalController {
    @Autowired
    private MedicalDirectionRepository medicalDirectionRepository;
    @Autowired
    private DoctorRepository doctorRepository;


    @GetMapping(value = "/requests/getmedicaldirections")
    public String getMedicalDirections() {
        ArrayList<MedicalDirectionDTO> medicalDirectionDTOs = new ArrayList<>();
        for (MedicalDirection buffer : medicalDirectionRepository.findAll()) {
            medicalDirectionDTOs.add(new MedicalDirectionDTO(buffer));
        }
        return medicalDirectionDTOs.stream()
                .map(n -> n.comboboxJSON())
                .collect(Collectors.joining(",", "[", "]"));
    }

    @GetMapping("/requests/directions")
    public String getDirection(@RequestParam(value = "page", required = false) Integer page) {
        ArrayList<MedicalDirectionDTO> medicalDirectionDTOs = new ArrayList<>();
        for (MedicalDirection buffer : medicalDirectionRepository.findAll(PageRequest.of(0, page * 12))) {
            medicalDirectionDTOs.add(new MedicalDirectionDTO(buffer));
        }
        return medicalDirectionDTOs.stream()
                .map(n -> n.directionJSON())
                .collect(Collectors.joining(",", "[", "]"));
    }

    @GetMapping("/requests/doctors")
    public String getDoctors(@RequestParam(value = "directionId", required = false) Integer id,
                             @RequestParam(value = "fio", required = false) String fio,
                             @RequestParam(value = "page", required = false) Integer page) {

        if (id == null) {
            id = -1;
        }

        Page<Doctor> doctors = null;

        if (fio != null & id != -1) {
            doctors = doctorRepository.findByNameContainingIgnoreCaseAndSpeciality_SuitableMedicalDirectionsIn(fio,
                    medicalDirectionRepository.findById(id), PageRequest.of(0, page * 6));
        } else if (fio != null) {
            doctors = doctorRepository.findByNameContainingIgnoreCase(fio, PageRequest.of(0, page * 6));
        } else if (id != -1) {
            doctors = doctorRepository.findBySpeciality_SuitableMedicalDirectionsIn(
                    medicalDirectionRepository.findById(id), PageRequest.of(0, page * 6));
        } else {
            doctors = doctorRepository.findAll(PageRequest.of(0, page * 6));
        }

        ArrayList<DoctorDTO> doctorDTOs = new ArrayList<>();

        for (Doctor buffer : doctors) {
            doctorDTOs.add(new DoctorDTO(buffer));
        }

        return doctorDTOs.stream()
                .map(n -> n.commonJSON())
                .collect(Collectors.joining(",", "[", "]"));
    }
}
