package com.example.intellecta.sih_backend_2025.service;


import com.example.intellecta.sih_backend_2025.enum_.Status;
import com.example.intellecta.sih_backend_2025.model.Proposal;
import com.example.intellecta.sih_backend_2025.model_ML.EvaluationFileRequest;
import com.example.intellecta.sih_backend_2025.model_ML.EvaluationResponse;
import com.example.intellecta.sih_backend_2025.model_frontend.EvaluationReportResponse;
import com.example.intellecta.sih_backend_2025.model_frontend.ProposalListResponse;
import com.example.intellecta.sih_backend_2025.model_frontend.ProposalRequest;
import com.example.intellecta.sih_backend_2025.model_frontend.ProposalResponse;
import com.example.intellecta.sih_backend_2025.repository.ProposalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;
import java.util.stream.Collectors;


@Service
public class ProposalService {

    @Autowired
    private ProposalRepository proposalRepository;

    @Autowired
    private RestTemplate restTemplate;

    String url = "BACKEND_URL";

    public ResponseEntity<ProposalResponse> proposalEvaluation(ProposalRequest request){

        Logger.getLogger("ProposalController").info("Service class received a proposal");

        Proposal proposal = new Proposal();
        proposal.setProposalName(request.getProposalName());
        proposal.setFilePath(request.getFilePath());
        proposal.setInstitutionName(request.getInstitutionName());
        proposal.setStatus(Status.SUCCESS);

        proposalRepository.save(proposal);

        Logger.getLogger("ProposalController").info("Saved proposal");

       // evaluationProposalMLBackground(proposal.getId());

        return ResponseEntity.ok(new ProposalResponse(HttpStatus.ACCEPTED,"Saved Properly"));
    }

    @Async
    public String evaluationProposalMLBackground(Long proposalId){

        Optional<Proposal> proposal = proposalRepository.findById(proposalId);

        if(proposal.isEmpty()){
            return null;
        }
        try{
            EvaluationFileRequest request = new EvaluationFileRequest();
            request.setProposalId(proposalId);
            request.setProposalName(proposal.get().getFilePath());

            EvaluationResponse response = restTemplate.postForObject(
                    url,
                    request,
                    EvaluationResponse.class
            );
            proposal.get().setNovelReport(response.getNoveltyReport());
            proposal.get().setStatus(Status.COMPLETED);

            System.out.println(proposal);

            proposalRepository.save(proposal.get());

        }
        catch (Exception e){
            e.printStackTrace();
        }

        return "Successfully Evaluated";
    }

    public ResponseEntity<EvaluationReportResponse> getReport(long id){

        Optional<Proposal> proposalOpt = proposalRepository.findById(id);

        // 2. Check if it exists
        if (proposalOpt.isEmpty()) {
            // CRITICAL FIX: You must use 'return' here.
            // Otherwise, the code continues and crashes at .get() below.
            return ResponseEntity.notFound().build();
        }

        Proposal proposal = proposalOpt.get();
        EvaluationReportResponse response = new EvaluationReportResponse();

        response.setProposalName(proposal.getProposalName());

        response.setInstitutionName(proposal.getInstitutionName());
        response.setFilePath(proposal.getFilePath());

        response.setStatus(proposal.getStatus().name());
        response.setCreationDate(proposal.getCreationDate());

        response.setNovelScore(proposal.getNovelScore());
        response.setBudgetScore(proposal.getBudgetScore());

        response.setGuidelineScore(proposal.getGuidelineScore());
        response.setOverallScore(proposal.getOverallScore());

        response.setNovelReport(proposal.getNovelReport());
        response.setBudgetReport(proposal.getBudgetReport());
        response.setGuidelineReport(proposal.getGuidelineReport());

        return ResponseEntity.ok(response);
    }

    public ResponseEntity<List<ProposalListResponse>> getAllProposals(){

        List<Proposal> proposals = proposalRepository.findAll();

        List<ProposalListResponse> response = proposals.stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());

        return ResponseEntity.ok(response);

    }

    private ProposalListResponse mapToDto(Proposal proposal) {
        ProposalListResponse dto = new ProposalListResponse();

        dto.setProposalId(proposal.getId());
        dto.setProposalName(proposal.getProposalName());
        dto.setInstitutionName(proposal.getInstitutionName());
        dto.setFilePath(proposal.getFilePath());
        dto.setCreationDate(proposal.getCreationDate());

        if (proposal.getStatus() != null) {
            dto.setStatus(proposal.getStatus().name());
        }
        return dto;
    }
}
