package com.nutrilog.Entity;

import java.time.LocalDate;
import jakarta.persistence.*;

@Entity
@Table(name = "food_entry")
public class FoodEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="entry_id")
    private Integer entryId;

    @Column(name="user_id")
    private Integer userId;

    @Column(name="food_name")
    private String foodName;

    private Double calories;
    private Double protein;
    private Double carbs;
    private Double fats;

    @Column(name="meal_type")
    private String mealType;

    @Column(name="entry_date")
    private LocalDate entryDate;
    
    public FoodEntry() {

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

	public LocalDate getEntryDate() {
	    return entryDate;
	}

	public void setEntryDate(LocalDate entryDate) {
	    this.entryDate = entryDate;
	}
	public Integer getEntryId() {
	    return entryId;
	}

	public void setEntryId(Integer entryId) {
	    this.entryId = entryId;
	}

	public Integer getUserId() {
	    return userId;
	}

	public void setUserId(Integer userId) {
	    this.userId = userId;
	}

	public String getFoodName() {
	    return foodName;
	}

	public void setFoodName(String foodName) {
	    this.foodName = foodName;
	}

	public String getMealType() {
	    return mealType;
	}

	public void setMealType(String mealType) {
	    this.mealType = mealType;
	}
}
