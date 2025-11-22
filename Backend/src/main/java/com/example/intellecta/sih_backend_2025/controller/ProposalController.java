package com.example.intellecta.sih_backend_2025.controller;


import com.example.intellecta.sih_backend_2025.model_frontend.EvaluationReportResponse;
import com.example.intellecta.sih_backend_2025.model_frontend.ProposalListResponse;
import com.example.intellecta.sih_backend_2025.model_frontend.ProposalRequest;
import com.example.intellecta.sih_backend_2025.model_frontend.ProposalResponse;
import com.example.intellecta.sih_backend_2025.service.ProposalService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api/proposal")
public class ProposalController {

    @Autowired
    ProposalService proposalService;

    @GetMapping("/test")
    public String test(){
        return "Hello hey";
    }


    @PostMapping("/evaluation")
    public ResponseEntity<ProposalResponse> proposalEvaluation(@RequestBody ProposalRequest request){

        Logger.getLogger("ProposalController").info("Received a proposal evaluation request");
        ProposalResponse ev = new ProposalResponse();

        return proposalService.proposalEvaluation(request);

    }

    @GetMapping("/getAll")
    public  ResponseEntity<List<ProposalListResponse>>  getListOfProposals(){
        return proposalService.getAllProposals();
    }


    @GetMapping("/report/{id}")
    public  ResponseEntity<EvaluationReportResponse>  getEvluatedReport(@PathVariable long id){
        return proposalService.getReport(id);
    }


}
