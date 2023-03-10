package com.company.reportspam.repository;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.stereotype.Repository;
import javax.annotation.PostConstruct;
import java.io.InputStream;
import java.util.Iterator;
import java.util.UUID;

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

    public void delete(UUID id) {
        Iterator<JsonNode> it = reports.iterator();
        while (it.hasNext()) {
            JsonNode node = it.next();
            if (UUID.fromString(node.get("id").textValue()).equals(id)){
                it.remove();
            }
        }
    }

    public void resolveReport(UUID id, String state) {
        Iterator<JsonNode> it = reports.iterator();
        while (it.hasNext()) {
            JsonNode node = it.next();
            if (UUID.fromString(node.get("id").textValue()).equals(id)){
                ((ObjectNode)node).put("state", state);
                System.out.println("Changed node is ");
                System.out.println(node.get("id"));
                System.out.println(node.get("state"));
            }
        }
    }
}
