package com.medicalcenter.dto;

import com.medicalcenter.entities.MedicalDirection;

public class MedicalDirectionDTO {
    private long medicalDirectionId;
    private String medicalDirectionName;
    private String medicalDirectionImagePath;
    private String medicalDirectionDescription;

    public MedicalDirectionDTO(MedicalDirection entity) {
        this.medicalDirectionId = entity.getId();
        this.medicalDirectionName = entity.getName();
        this.medicalDirectionImagePath = entity.getImage_path();
        this.medicalDirectionDescription = entity.getDescription();
    }

    public String comboboxJSON()
    {
        String json="{\"id\":"+medicalDirectionId+", \"name\":\""
                +medicalDirectionName+"\"}";
        return json;
    }

    public String directionJSON()
    {
        String json="{\"id\":"+medicalDirectionId+", \"direction_name\":\""
                +medicalDirectionName+"\", \"description\":\""
                +medicalDirectionDescription+"\", \"image\":\""
                +medicalDirectionImagePath+"\"}";
        return json;
    }
}
