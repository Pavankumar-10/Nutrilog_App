package com.nutrilog.DTO;

public class DashboardDTO {

    private Double calories;
    private Double protein;
    private Double carbs;
    private Double fats;

    public DashboardDTO() {
    }

    public DashboardDTO(
            Double calories,
            Double protein,
            Double carbs,
            Double fats) {

        this.calories = calories;
        this.protein = protein;
        this.carbs = carbs;
        this.fats = fats;
    }

    public Double getCalories() {
        return calories;
    }

    public void setCalories(Double calories) {
        this.calories = calories;
    }

    public Double getProtein() {
        return protein;
    }

    public void setProtein(Double protein) {
        this.protein = protein;
    }

    public Double getCarbs() {
        return carbs;
    }

    public void setCarbs(Double carbs) {
        this.carbs = carbs;
    }

    public Double getFats() {
        return fats;
    }

    public void setFats(Double fats) {
        this.fats = fats;
    }
}