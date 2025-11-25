package com.example.intellecta.sih_backend_2025.model;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String token;

    private boolean expired;
    private boolean revoked;

    @ManyToOne
    private User user;

}
