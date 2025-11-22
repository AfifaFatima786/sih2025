package com.example.intellecta.sih_backend_2025.model_frontend;

import lombok.Data;

import java.time.LocalDateTime;


@Data
public class EvaluationReportResponse {
    private Long proposalId;
    private String proposalName;
    private String institutionName;
    private String filePath;
    private String status;
    private Double novelScore;
    private Double budgetScore;
    private Double overallScore;
    private Double guidelineScore;
    private String novelReport;
    private String budgetReport;
    private String guidelineReport;
    private LocalDateTime creationDate;

}
