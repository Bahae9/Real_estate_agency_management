package com.agency.server.services;

import com.agency.server.entities.RealEstate;
import com.agency.server.repositories.RealEstateRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RealEstateService{

    @Autowired
    private RealEstateRepository realEstateRepository;

    public List<RealEstate> getAllRealEstates() {
        return realEstateRepository.findAll();
    }

    public RealEstate getRealEstateById(Long id) {
        return realEstateRepository.findById(id).orElseThrow(() -> new RuntimeException("Real estate not found"));
    }

    public RealEstate createRealEstate(RealEstate realEstate) {
        return realEstateRepository.save(realEstate);
    }

    public RealEstate updateRealEstate(Long id, RealEstate realEstate) {
        Optional<RealEstate> existingRealEstateOptional = realEstateRepository.findById(id);
        if (!existingRealEstateOptional.isPresent()) {
            throw new RuntimeException("Real estate not found");
        }
        RealEstate existingRealEstate = existingRealEstateOptional.get();
        existingRealEstate.setType(realEstate.getType());
        existingRealEstate.setUpdatedAt(realEstate.getUpdatedAt());
        existingRealEstate.setPrice(realEstate.getPrice());
        existingRealEstate.setTransactionType(realEstate.getTransactionType());
        existingRealEstate.setTitle(realEstate.getTitle());
        existingRealEstate.setDescription(realEstate.getDescription());
        existingRealEstate.setSize(realEstate.getSize());
        existingRealEstate.setLocation(realEstate.getLocation());
        existingRealEstate.setStatus(realEstate.getStatus());
        existingRealEstate.setCreatedAt(realEstate.getCreatedAt());
        return realEstateRepository.save(existingRealEstate);
    }

    public void deleteRealEstate(Long id) {
        realEstateRepository.deleteById(id);
    }

    public List<RealEstate> searchRealEstates(String title) {
        return realEstateRepository.findByTitleContainingIgnoreCase(title);
    }
}
