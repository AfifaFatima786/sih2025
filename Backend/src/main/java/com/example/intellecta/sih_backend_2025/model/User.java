package com.example.intellecta.sih_backend_2025.model;



import com.example.intellecta.sih_backend_2025.enum_.Role;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue()
    private int id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    @Enumerated(EnumType.STRING)  // This stores the enum as STRING
    @Column(name = "role", length = 50)  // Increase length to 50
    private Role role;

}
