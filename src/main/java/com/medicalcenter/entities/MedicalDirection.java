package com.medicalcenter.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "medical_directions")
public class MedicalDirection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "image_path")
    private String image_path;

    @Column(name = "description")
    private String description;

    @ManyToMany
    @JoinTable(
            name = "specialities_to_directions",
            joinColumns = @JoinColumn(name = "medical_direction_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "speciality_id", referencedColumnName = "id"))
    private Set<Speciality> availableSpecialties;

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

    public String getImage_path() {
        return image_path;
    }

    public void setImage_path(String image_path) {
        this.image_path = image_path;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<Speciality> getAvailableSpecialties() {
        return availableSpecialties;
    }

    public void setAvailableSpecialties(Set<Speciality> availableSpecialties) {
        this.availableSpecialties = availableSpecialties;
    }
}
