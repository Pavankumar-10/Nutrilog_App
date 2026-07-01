package com.nutrilog.Service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nutrilog.DTO.DashboardDTO;
import com.nutrilog.Entity.FoodEntry;
import com.nutrilog.Repository.FoodEntryRepository;

@Service
public class FoodEntryService {

    @Autowired
    private FoodEntryRepository repository;

    // Get All Food Entries
    public List<FoodEntry> getAllFoodEntries() {
        return repository.findAll();
    }

    // Add Food Entry
    public FoodEntry saveFood(FoodEntry food) {
        return repository.save(food);
    }

    // Get Food Entry By Id
    public FoodEntry getFoodById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    // Update Food Entry
    public FoodEntry updateFood(FoodEntry food) {
        return repository.save(food);
    }
    

    // Delete Food Entry
    public void deleteFood(Integer id) {
        repository.deleteById(id);
    }
    
    public List<FoodEntry> getFoodHistory(Integer userId) {

        return repository.findByUserId(userId);

    }
    
    public DashboardDTO getDashboard(
            Integer userId) {

    List<FoodEntry> foods = repository.findByUserIdAndEntryDate( userId, LocalDate.now());

        double calories = 0;
        double protein = 0;
        double carbs = 0;
        double fats = 0;

        for(FoodEntry food : foods) {

            calories += food.getCalories();
            protein += food.getProtein();
            carbs += food.getCarbs();
            fats += food.getFats();
        }

        return new DashboardDTO(
                calories,
                protein,
                carbs,
                fats);
    }
}