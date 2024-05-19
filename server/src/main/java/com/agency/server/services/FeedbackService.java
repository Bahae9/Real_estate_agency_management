package com.agency.server.services;

import com.agency.server.entities.Feedback;
import com.agency.server.repositories.FeedbackRepository;
import com.agency.server.services.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService{

    @Autowired
    private FeedbackRepository feedbackRepository;

    
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    
    public Feedback getFeedbackById(Long id) {
        return feedbackRepository.findById(id).orElseThrow(() -> new RuntimeException("Feedback not found"));
    }

    
    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }

    
    public Feedback updateFeedback(Long id, Feedback feedback) {
        Optional<Feedback> existingFeedbackOptional = feedbackRepository.findById(id);
        if (!existingFeedbackOptional.isPresent()) {
            throw new RuntimeException("Feedback not found");
        }
        Feedback existingFeedback = existingFeedbackOptional.get();
        existingFeedback.setUserId(feedback.getUserId());
        existingFeedback.setFeedback(feedback.getFeedback());
        existingFeedback.setRating(feedback.getRating());
        existingFeedback.setDate(feedback.getDate());
        return feedbackRepository.save(existingFeedback);
    }

    
    public void deleteFeedback(Long id) {
        feedbackRepository.deleteById(id);
    }
}
