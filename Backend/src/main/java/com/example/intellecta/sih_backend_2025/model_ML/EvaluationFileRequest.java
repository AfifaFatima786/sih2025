package com.example.intellecta.sih_backend_2025.model_ML;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EvaluationFileRequest {

    private Long proposalId;
    private String proposalName;
    private String fileName;
    private String filePath;
}
