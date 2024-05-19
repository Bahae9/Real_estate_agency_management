package com.agency.server.entities.enums;

public enum PricePlage {
    MINUS_500K(0, 500000),
    FIVEHUNDREDK_TO_1M(500000, 1000000),
    ONE_M_TO_3M(1000000, 3000000),
    PLUS_3M(3000000, 5000000),
    ALL(0, 5000000);

    private final int minPrice;
    private final int maxPrice;

    PricePlage(int minPrice, int maxPrice) {
        this.minPrice = minPrice;
        this.maxPrice = maxPrice;
    }

    public int getMinPrice() {
        return minPrice;
    }

    public int getMaxPrice() {
        return maxPrice;
    }

    public static PricePlage fromString(String pricePlage) {
        switch (pricePlage) {
            case "-500000":
                return MINUS_500K;
            case "500000-1000000":
                return FIVEHUNDREDK_TO_1M;
            case "1000000-3000000":
                return ONE_M_TO_3M;
            case "+3000000":
                return PLUS_3M;
            default:
                return ALL;
        }
    }
}