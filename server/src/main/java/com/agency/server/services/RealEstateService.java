package com.agency.server.services;

import com.agency.server.entities.RealEstate;
import com.agency.server.entities.enums.PricePlage;
import com.agency.server.entities.enums.AreaPlage;
import com.agency.server.repositories.RealEstateRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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


    public List<RealEstate> searchRealEstates(
            String title,
            RealEstate.TransactionType transactionType,
            Integer minPrice,
            Integer maxPrice,
            String sortingBy,
            String pricePlage,
            String areaPlage,
            List<String> categories) {
        
        // Set default sorting order
        Sort sort = "asc".equalsIgnoreCase(sortingBy) ? Sort.by(Sort.Order.asc("price")) : Sort.by(Sort.Order.desc("price"));

        // If pricePlage is set and not "ALL", it takes priority over minPrice and maxPrice
        if (pricePlage != null && !"ALL".equalsIgnoreCase(pricePlage)) {
            PricePlage plage = PricePlage.fromString(pricePlage);
            minPrice = plage.getMinPrice();
            maxPrice = plage.getMaxPrice();
        } else {
            // Set default values for minPrice and maxPrice if they are null
            if (minPrice == null) minPrice = 0;
            if (maxPrice == null) maxPrice = 5000000;
        }

        // Set default values for minArea and maxArea based on areaPlage
        int minArea = 0;
        int maxArea = Integer.MAX_VALUE; // Default to the maximum possible value
        if (areaPlage != null && !"ALL".equalsIgnoreCase(areaPlage)) {
            AreaPlage areaRange = AreaPlage.fromString(areaPlage);
            minArea = areaRange.getMinArea();
            maxArea = areaRange.getMaxArea();
        }

        // Perform the search based on transactionType, price range, area range, and categories
        List<RealEstate> realEstates;
        if (transactionType == null || "ALL".equalsIgnoreCase(transactionType.name())) {
            if (categories == null) {
                realEstates = realEstateRepository.findByTitleContainingIgnoreCaseAndPriceBetweenAndSizeBetween(title, minPrice, maxPrice, minArea, maxArea, sort);
            } else {
                realEstates = realEstateRepository.findByTitleContainingIgnoreCaseAndPriceBetweenAndSizeBetweenAndTypeIn(title, minPrice, maxPrice, minArea, maxArea, categories, sort);
            }
        } else {
            if (categories == null) {
                realEstates = realEstateRepository.findByTitleContainingIgnoreCaseAndTransactionTypeAndPriceBetweenAndSizeBetween(title, transactionType, minPrice, maxPrice, minArea, maxArea, sort);
            } else {
                realEstates = realEstateRepository.findByTitleContainingIgnoreCaseAndTransactionTypeAndPriceBetweenAndSizeBetweenAndTypeIn(title, transactionType, minPrice, maxPrice, minArea, maxArea, categories, sort);
            }
        }

        // If both pricePlage and areaPlage are specified and not "ALL", perform the custom sorting
        if (!"ALL".equalsIgnoreCase(areaPlage) && !"ALL".equalsIgnoreCase(pricePlage)) {
            return mergePriceAndArea(realEstates);
        }
    
        // Handle the category filtering
        if (categories == null || categories.contains("ALL")) {
            categories = null; // Treat as if no category filter is applied
        }
    
        // Perform the search based on type, price range, area range, and categories
        if (transactionType == null || "ALL".equalsIgnoreCase(transactionType.name())) {
            if (categories == null) {
                return realEstateRepository.findByTitleContainingIgnoreCaseAndPriceBetweenAndSizeBetween(title, minPrice, maxPrice, minArea, maxArea, sort);
            } else {
                return realEstateRepository.findByTitleContainingIgnoreCaseAndPriceBetweenAndSizeBetweenAndTypeIn(title, minPrice, maxPrice, minArea, maxArea, categories, sort);
            }
        } else {
            if (categories == null) {
                return realEstateRepository.findByTitleContainingIgnoreCaseAndTransactionTypeAndPriceBetweenAndSizeBetween(title, transactionType, minPrice, maxPrice, minArea, maxArea, sort);
            } else {
                return realEstateRepository.findByTitleContainingIgnoreCaseAndTransactionTypeAndPriceBetweenAndSizeBetweenAndTypeIn(title, transactionType, minPrice, maxPrice, minArea, maxArea, categories, sort);
            }
        }
    }
    private List<RealEstate> mergePriceAndArea(List<RealEstate> realEstates) {
        // Calculate mean for each real estate and sort based on the mean
        return realEstates.stream()
                .sorted((re1, re2) -> {
                    double mean1 = (normalizePrice(re1.getPrice()) + normalizeArea(re1.getSize())) / 2.0;
                    double mean2 = (normalizePrice(re2.getPrice()) + normalizeArea(re2.getSize())) / 2.0;
                    return Double.compare(mean1, mean2);
                })
                .collect(Collectors.toList());
    }
    
    private double normalizePrice(int price) {
        final int minPrice = 0;
        final int maxPrice = 5000000;
        return (double) (price - minPrice) / (maxPrice - minPrice);
    }
    
    private double normalizeArea(int area) {
        final int minArea = 0;
        final int maxArea = 10000; // Assuming 10000 as the upper bound for normalization
        return (double) (area - minArea) / (maxArea - minArea);
    }
}
