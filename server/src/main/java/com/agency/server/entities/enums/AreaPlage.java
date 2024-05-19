package com.agency.server.entities.enums;

public enum AreaPlage {
    MINUS_50(0, 50),
    FIFTY_TO_100(50, 100),
    ONEHUNDRED_TO_200(100, 200),
    TWOHUNDRED_TO_500(200, 500),
    PLUS_500(500, Integer.MAX_VALUE),
    ALL(0, Integer.MAX_VALUE);

    private final int minArea;
    private final int maxArea;

    AreaPlage(int minArea, int maxArea) {
        this.minArea = minArea;
        this.maxArea = maxArea;
    }

    public int getMinArea() {
        return minArea;
    }

    public int getMaxArea() {
        return maxArea;
    }

    public static AreaPlage fromString(String areaPlage) {
        switch (areaPlage) {
            case "-50":
                return MINUS_50;
            case "50-100":
                return FIFTY_TO_100;
            case "100-200":
                return ONEHUNDRED_TO_200;
            case "200-500":
                return TWOHUNDRED_TO_500;
            case "+500":
                return PLUS_500;
            default:
                return ALL;
        }
    }
}