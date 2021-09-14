package com.medicalcenter.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "specialities")
public class Speciality {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @ManyToMany(mappedBy = "availableSpecialties")
    private Set<MedicalDirection> suitableMedicalDirections;

    @OneToMany(mappedBy = "speciality")
    private Set<Doctor> doctor;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<MedicalDirection> getSuitableMedicalDirections() {
        return suitableMedicalDirections;
    }

    public void setSuitableMedicalDirections(Set<MedicalDirection> suitableMedicalDirections) {
        this.suitableMedicalDirections = suitableMedicalDirections;
    }

    public Set<Doctor> getDoctor() {
        return doctor;
    }

    public void setDoctor(Set<Doctor> doctor) {
        this.doctor = doctor;
    }
}
