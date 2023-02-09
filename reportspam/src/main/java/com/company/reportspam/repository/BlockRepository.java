package com.company.reportspam.repository;


import com.company.reportspam.model.ReferenceResource;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;




@Repository
public class BlockRepository {

    private ArrayList<ReferenceResource> referenceResources = new ArrayList<>();

    public void add(ReferenceResource referenceResource) {

        this.referenceResources.add(referenceResource);

        System.out.println("Resource blocked" + referenceResource.resourceId);

    }

}

