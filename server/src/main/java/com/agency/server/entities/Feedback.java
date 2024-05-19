package com.agency.server.entities;

import lombok.Data;
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Data
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedbackId;
    
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User userId;
    
    private String feedback;
    
    @Enumerated(EnumType.ORDINAL)
    private rateAuth rating;

    @Column(nullable = false)
    @Temporal(TemporalType.DATE)
    private Date date;

    public enum rateAuth {
        ZERO,
        ONE,
        TWO,
        THREE,
        FOUR,
        FIVE;

        public static rateAuth fromValue(int value) {
            switch (value) {
                case 0:
                    return ZERO;
                case 1:
                    return ONE;
                case 2:
                    return TWO;
                case 3:
                    return THREE;
                case 4:
                    return FOUR;
                case 5:
                    return FIVE;
                default:
                    throw new IllegalArgumentException("Invalid value: " + value);
            }
        }

        public int getValue() {
            return this.ordinal();
        }
    }
}
