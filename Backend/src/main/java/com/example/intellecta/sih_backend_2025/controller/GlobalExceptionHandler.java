package com.example.intellecta.sih_backend_2025.controller;


import com.example.intellecta.sih_backend_2025.model.ApiErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

//
//@ControllerAdvice
//public class GlobalExceptionHandler {
//
//    @ExceptionHandler(ResourceNotFoundException.class)
//    public ResponseEntity<ApiErrorResponse> handleResourceNotFound(ResourceNotFoundException e) {
//        String message = e.getMessage() != null ? e.getMessage() : "Resource not found";
//        ApiErrorResponse error = new ApiErrorResponse(HttpStatus.NOT_FOUND.value(), message);
//        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
//    }
//
//    @ExceptionHandler(IllegalArgumentException.class)
//    public ResponseEntity<ApiErrorResponse> handleInvalidUuid(IllegalArgumentException e) {
//        ApiErrorResponse error = new ApiErrorResponse(HttpStatus.BAD_REQUEST.value(), "Invalid ID format");
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
//    }
//
//    @ExceptionHandler(MethodArgumentNotValidException.class)
//    public ResponseEntity<ApiErrorResponse> handleValidationExceptions(MethodArgumentNotValidException e) {
//        String message = "Invalid data";
//
//
//        if (e.getBindingResult().hasErrors()) {
//            ObjectError firstError = e.getBindingResult().getAllErrors().get(0);
//            if (firstError.getDefaultMessage() != null) {
//                message = firstError.getDefaultMessage();
//            }
//        }
//
//        ApiErrorResponse error = new ApiErrorResponse(HttpStatus.BAD_REQUEST.value(), message);
//        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
//    }
//}