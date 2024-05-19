package com.agency.server.repositories;

import com.agency.server.entities.RealEstate;
import com.agency.server.entities.RealEstate.TransactionType;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Sort;

import java.util.List;

@Repository
public interface RealEstateRepository extends JpaRepository<RealEstate, Long> {
    List<RealEstate> findByTitleContainingIgnoreCase(String title);
    List<RealEstate> findByTitleContainingIgnoreCaseAndTransactionType(String title, TransactionType type);
    List<RealEstate> findByTitleContainingIgnoreCaseAndPriceBetween(String title, int minPrice, int maxPrice, Sort sort);
    List<RealEstate> findByTitleContainingIgnoreCaseAndTransactionTypeAndPriceBetween(String title, RealEstate.TransactionType type, int minPrice, int maxPrice, Sort sort);
    List<RealEstate> findByTitleContainingIgnoreCaseAndPriceBetweenAndSizeBetween(String title, int minPrice, int maxPrice, int minArea, int maxArea, Sort sort);
    List<RealEstate> findByTitleContainingIgnoreCaseAndTransactionTypeAndPriceBetweenAndSizeBetween(String title, RealEstate.TransactionType type, int minPrice, int maxPrice, int minArea, int maxArea, Sort sort);
    List<RealEstate> findByTitleContainingIgnoreCaseAndPriceBetweenAndSizeBetweenAndTypeIn(String title, int minPrice, int maxPrice, int minSize, int maxSize, List<String> categories, Sort sort);
    List<RealEstate> findByTitleContainingIgnoreCaseAndTransactionTypeAndPriceBetweenAndSizeBetweenAndTypeIn(String title, RealEstate.TransactionType type, int minPrice, int maxPrice, int minSize, int maxSize, List<String> categories, Sort sort);
}
