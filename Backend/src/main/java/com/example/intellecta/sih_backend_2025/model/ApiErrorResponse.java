package com.example.intellecta.sih_backend_2025.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ApiErrorResponse {
    HttpStatus status;
    String message;

//    public ApiErrorResponse(HttpStatus status, String message) {
//        this.status = status;
//        this.message = message;
//    }
}
