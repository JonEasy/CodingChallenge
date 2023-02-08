package com.company.reportspam.controller;

import com.company.reportspam.service.ReportService;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class ReportController {

    @Autowired
    ReportService reportService;

    @GetMapping("/reports")
    public ResponseEntity<JsonNode> findAllReports() {
        JsonNode reports = reportService.getReports();
        return new ResponseEntity<JsonNode>(reports,HttpStatus.OK);
    }
    @DeleteMapping("/reports/{id}")
    public ResponseEntity<HttpStatus> deleteReport(@PathVariable UUID id) {
        reportService.deleteReport(id);
        return new ResponseEntity<HttpStatus>(HttpStatus.OK);
    }

    @PutMapping("/reports/{id}")
    public ResponseEntity<HttpStatus> resolveReport(@PathVariable UUID id, @RequestParam String state) {
        reportService.resolveReport(id, state);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
