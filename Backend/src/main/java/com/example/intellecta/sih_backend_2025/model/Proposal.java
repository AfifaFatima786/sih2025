package com.example.intellecta.sih_backend_2025.model;


import com.example.intellecta.sih_backend_2025.enum_.Status;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@Entity(name = "Proposals")
public class Proposal{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String proposalName;

    @Column(nullable = false)
    private String filePath;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime creationDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    @Column(nullable = false)
    private String institutionName;

    private Double novelScore;

    private Double budgetScore;

    private Double guidelineScore;

    private Double overallScore;

    @Column(columnDefinition = "LONGTEXT")
    private String novelReport;

    @Column(columnDefinition = "LONGTEXT")
    private String budgetReport;

    @Column(columnDefinition = "LONGTEXT")
    private String guidelineReport;

}
