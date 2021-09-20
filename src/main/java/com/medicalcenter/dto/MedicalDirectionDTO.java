package com.medicalcenter.dto;

import com.medicalcenter.entities.MedicalDirection;

public class MedicalDirectionDTO {
    private long medicalDirectionId;
    private String medicalDirectionName;
    private String medicalDirectionImagePath;
    private String medicalDirectionDescription;

    public MedicalDirectionDTO() {
    }

    public MedicalDirectionDTO(MedicalDirection entity) {
        this.medicalDirectionId = entity.getId();
        this.medicalDirectionName = entity.getName();
        this.medicalDirectionImagePath = entity.getImage_path();
        this.medicalDirectionDescription = entity.getDescription();
    }

    public long getMedicalDirectionId() {
        return medicalDirectionId;
    }

    public String getMedicalDirectionName() {
        return medicalDirectionName;
    }

    public String getMedicalDirectionImagePath() {
        return medicalDirectionImagePath;
    }

    public String getMedicalDirectionDescription() {
        return medicalDirectionDescription;
    }
}
