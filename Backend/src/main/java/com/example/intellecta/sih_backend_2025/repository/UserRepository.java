package com.example.intellecta.sih_backend_2025.repository;



import com.example.intellecta.sih_backend_2025.enum_.Role;
import com.example.intellecta.sih_backend_2025.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    User findByEmail(String username);
    boolean existsByEmail(String email);

    User findByName(String name);

    List<User> findByRole(Role role);

}
