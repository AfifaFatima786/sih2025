package com.example.intellecta.sih_backend_2025.service;


import com.example.intellecta.sih_backend_2025.UserPrincipal;
import com.example.intellecta.sih_backend_2025.model.User;
import com.example.intellecta.sih_backend_2025.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findByEmail(username);
        System.out.println(user);
        if(user == null){
            System.out.println("User not found");
            throw  new UsernameNotFoundException("User not found");
        }
        return new UserPrincipal(user);
    }
}
