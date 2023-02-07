package com.company.reportspam.controller;

import com.company.reportspam.service.ReportService;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReportController {

    @Autowired
    ReportService reportService;

    @GetMapping("/reports")
    public ResponseEntity<JsonNode> findAllReports() {
        JsonNode reports = reportService.getReports();
        return new ResponseEntity<JsonNode>(reports,HttpStatus.OK);
    }
}
