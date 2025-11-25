package com.example.intellecta.sih_backend_2025.controller;


import com.example.intellecta.sih_backend_2025.enum_.Role;
import com.example.intellecta.sih_backend_2025.model.AuthResponse;
import com.example.intellecta.sih_backend_2025.model.LoginRequest;
import com.example.intellecta.sih_backend_2025.model.RegisterRequest;
import com.example.intellecta.sih_backend_2025.service.AuthService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register-admin")
    public ResponseEntity<AuthResponse> registerAdmin(@RequestBody RegisterRequest request,  HttpServletResponse response){
        request.setRole(Role.ADMIN);
        return authService.register(request,response);
    }

    @PostMapping("/register-user")
    public ResponseEntity<AuthResponse> registerUser(@RequestBody RegisterRequest request,  HttpServletResponse response){
        request.setRole(Role.USER);
        return authService.register(request,response);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> loginAdmin(@RequestBody LoginRequest request, HttpServletResponse response){
        return authService.loginVerify(request, response);
    }

    @PostMapping("/logout")
    public ResponseEntity<AuthResponse> logout(HttpServletResponse response) {

        return authService.logout(response);

    }


}
