package com.example.intellecta.sih_backend_2025.repository;


import com.example.intellecta.sih_backend_2025.model.Proposal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface  ProposalRepository extends JpaRepository<Proposal, Long> {


}
