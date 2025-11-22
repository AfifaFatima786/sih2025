package com.example.intellecta.sih_backend_2025.model_frontend;


import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ProposalListResponse {
    private Long proposalId;
    private String proposalName;
    private String institutionName;
    private String filePath;
    private String status;
    private LocalDateTime creationDate;
}
