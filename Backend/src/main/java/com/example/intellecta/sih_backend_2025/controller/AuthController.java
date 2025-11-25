package com.example.intellecta.sih_backend_2025.controller;


import com.example.intellecta.sih_backend_2025.enum_.Role;
import com.example.intellecta.sih_backend_2025.model.AuthResponse;
import com.example.intellecta.sih_backend_2025.model.LoginRequest;
import com.example.intellecta.sih_backend_2025.model.RegisterRequest;
import com.example.intellecta.sih_backend_2025.service.AuthService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;

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
        System.out.println("Logout called");
        return authService.logout(response);

    }

    @GetMapping("/profile")
    public ResponseEntity<AuthResponse> getProfile() {

        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (principal instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) principal;
            String email = userDetails.getUsername();


            return ResponseEntity.ok(new AuthResponse(
                    200,
                    "User is authenticated",
                    null,
                    email,
                    Map.of("role", userDetails.getAuthorities().toString()),
                    LocalDateTime.now()
            ));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
    }


}
