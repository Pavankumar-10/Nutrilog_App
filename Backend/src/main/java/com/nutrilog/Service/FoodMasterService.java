package com.nutrilog.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nutrilog.DTO.NutritionResponse;
import com.nutrilog.Entity.FoodMaster;
import com.nutrilog.Repository.FoodMasterRepository;

@Service
public class FoodMasterService {

    @Autowired
    private FoodMasterRepository repository;

    public List<FoodMaster> getAllFoods() {
        return repository.findAll();
    }

    public FoodMaster saveFood(FoodMaster food) {
        return repository.save(food);
    }

    public FoodMaster getFoodById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public FoodMaster updateFood(FoodMaster food) {
        return repository.save(food);
    }

    public void deleteFood(Integer id) {
        repository.deleteById(id);
    }
    public FoodMaster getFoodByName(String foodName) {
        return repository.findByFoodName(foodName);
    }
    public NutritionResponse calculateNutrition(
            String foodName,
            Double quantity) {

        FoodMaster food =
                repository.findByFoodName(foodName);

        NutritionResponse response =
                new NutritionResponse();

        response.setFoodName(foodName);

        response.setQuantity(quantity);

        response.setCalories(
            food.getCaloriesPer100g()
            * quantity / 100
        );

        response.setProtein(
            food.getProteinPer100g()
            * quantity / 100
        );

        response.setCarbs(
            food.getCarbsPer100g()
            * quantity / 100
        );

        response.setFats(
            food.getFatsPer100g()
            * quantity / 100
        );

        return response;
    }
}