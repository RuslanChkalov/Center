package com.medicalcenter.dto;

import com.medicalcenter.entities.Doctor;


public class DoctorDTO {
    private long doctorId;
    private String doctorName;
    private String doctorPhotoPath;
    private String doctorEducation;
    private String doctorSpeciality;

    public DoctorDTO() {
    }

    public DoctorDTO(Doctor entity) {
        this.doctorId = entity.getId();
        this.doctorName = entity.getName();
        this.doctorPhotoPath = entity.getPhoto_path();
        this.doctorEducation = entity.getEducation();
        this.doctorSpeciality = entity.getSpeciality().getName();
    }

    public long getDoctorId() {
        return doctorId;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public String getDoctorPhotoPath() {
        return doctorPhotoPath;
    }

    public String getDoctorEducation() {
        return doctorEducation;
    }

    public String getDoctorSpeciality() {
        return doctorSpeciality;
    }
}