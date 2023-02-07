package com.company.reportspam.repository;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.io.InputStream;
import java.util.ArrayList;

@Repository
public class ReportRepository {
    private JsonNode reports;

    @PostConstruct
    public void createReports() {
        try {
            InputStream in = Thread.currentThread().getContextClassLoader().getResourceAsStream("reports.json");
            ObjectMapper mapper = new ObjectMapper();
            reports =  mapper.readValue(in, JsonNode.class);
        } catch (Exception e){
            throw new RuntimeException(e);
        }
    }

    public JsonNode getAllReports(){
        return reports;
    }

}
