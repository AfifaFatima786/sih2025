package com.example.intellecta.sih_backend_2025.model_frontend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.util.Map;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProposalResponse {

    private HttpStatus status;
    private String message;
}
