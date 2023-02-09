package com.company.reportspam.service;


import com.company.reportspam.model.ReferenceResource;
import com.company.reportspam.repository.BlockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class BlockService {

    @Autowired
    BlockRepository blockRepository;

    public void blockResource(ReferenceResource referenceResource) {
        blockRepository.add(referenceResource);
    }
}
