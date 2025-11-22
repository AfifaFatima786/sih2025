package com.example.intellecta.sih_backend_2025.model_ML;


import lombok.Data;

@Data
public class EvaluationResponse {

    private Long proposalId;
    private String proposalName;
    private Double score1;
    private Double score2;
    private Double score3;
    private Double score4;
    private String noveltyReport;


}
