package com.agency.server.controllers;

import com.agency.server.entities.RealEstate;
import com.agency.server.services.RealEstateService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/realestates")
public class RealEstateController {

    @Autowired
    private RealEstateService realEstateService;

    @GetMapping
    public List<RealEstate> getAllRealEstates() {
        return realEstateService.getAllRealEstates();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RealEstate> getRealEstateById(@PathVariable Long id) {
        RealEstate realEstate = realEstateService.getRealEstateById(id);
        return ResponseEntity.ok(realEstate);
    }

    @PostMapping
    public RealEstate createRealEstate(@RequestBody RealEstate realEstate) {
        return realEstateService.createRealEstate(realEstate);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RealEstate> updateRealEstate(@PathVariable Long id, @RequestBody RealEstate realEstate) {
        RealEstate updatedRealEstate = realEstateService.updateRealEstate(id, realEstate);
        return ResponseEntity.ok(updatedRealEstate);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRealEstate(@PathVariable Long id) {
        realEstateService.deleteRealEstate(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/search")
    public List<RealEstate> search(
            @RequestParam(value = "keyword", required = false) String title,
            @RequestParam(value = "transactionType", required = false) RealEstate.TransactionType transactionType,
            @RequestParam(value = "minPrice", required = false) Integer minPrice,
            @RequestParam(value = "maxPrice", required = false) Integer maxPrice,
            @RequestParam(value = "sortingBy", required = false, defaultValue = "desc") String sortingBy,
            @RequestParam(value = "pricePlage", required = false) String pricePlage,
            @RequestParam(value = "areaPlage", required = false) String areaPlage,
            @RequestParam(value = "categories", required = false) List<String> categories
            ) {
        
        return realEstateService.searchRealEstates(title, transactionType, minPrice, maxPrice, sortingBy, pricePlage, areaPlage, categories);
    }
}
