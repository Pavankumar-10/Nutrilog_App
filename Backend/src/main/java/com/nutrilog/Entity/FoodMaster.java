package com.nutrilog.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="food_master")
public class FoodMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="food_id")
    private Integer foodId;

    @Column(name="food_name")
    private String foodName;

    @Column(name="calories_per_100g")
    private Double caloriesPer100g;

    @Column(name="protein_per_100g")
    private Double proteinPer100g;

    @Column(name="carbs_per_100g")
    private Double carbsPer100g;

    @Column(name="fats_per_100g")
    private Double fatsPer100g;

    public FoodMaster() {
    }

	public Integer getFoodId() {
		return foodId;
	}

	public void setFoodId(Integer foodId) {
		this.foodId = foodId;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	public Double getCaloriesPer100g() {
		return caloriesPer100g;
	}

	public void setCaloriesPer100g(Double caloriesPer100g) {
		this.caloriesPer100g = caloriesPer100g;
	}

	public Double getProteinPer100g() {
		return proteinPer100g;
	}

	public void setProteinPer100g(Double proteinPer100g) {
		this.proteinPer100g = proteinPer100g;
	}

	public Double getCarbsPer100g() {
		return carbsPer100g;
	}

	public void setCarbsPer100g(Double carbsPer100g) {
		this.carbsPer100g = carbsPer100g;
	}

	public Double getFatsPer100g() {
		return fatsPer100g;
	}

	public void setFatsPer100g(Double fatsPer100g) {
		this.fatsPer100g = fatsPer100g;
	}

    // Generate Getters and Setters
}
