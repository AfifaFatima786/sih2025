package com.example.intellecta.sih_backend_2025.repository;




import com.example.intellecta.sih_backend_2025.model.Token;
import com.example.intellecta.sih_backend_2025.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TokenRepository extends JpaRepository<Token,Integer> {

    List<Token> findAllValidTokensByUser(User user);
}
