package com.company.reportspam.service;

import com.company.reportspam.repository.ReportRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReportService {
    @Autowired
    private ReportRepository reportRepository;

    public JsonNode getReports() {
        return reportRepository.getAllReports();
    }
}
