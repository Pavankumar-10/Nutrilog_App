package com.nutrilog.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nutrilog.DTO.NutritionRequest;
import com.nutrilog.DTO.NutritionResponse;
import com.nutrilog.Entity.FoodMaster;
import com.nutrilog.Service.FoodMasterService;

@RestController
@RequestMapping("/api/masterfoods")
@CrossOrigin("*")
public class FoodMasterController {

    @Autowired
    private FoodMasterService service;

    @GetMapping
    public List<FoodMaster> getFoods() {
        return service.getAllFoods();
    }

    @PostMapping
    public FoodMaster addFood(
            @RequestBody FoodMaster food) {

        return service.saveFood(food);
    }

    @GetMapping("/{id}")
    public FoodMaster getFood(
            @PathVariable Integer id) {

        return service.getFoodById(id);
    }

    @PutMapping
    public FoodMaster updateFood(
            @RequestBody FoodMaster food) {

        return service.updateFood(food);
    }

    @DeleteMapping("/{id}")
    public String deleteFood(
            @PathVariable Integer id) {

        service.deleteFood(id);

        return "Food Deleted";
    }

    @GetMapping("/name/{foodName}")
    public FoodMaster getFoodByName( @PathVariable String foodName) 
    {
    	return service.getFoodByName(foodName);
    }
    
    @PostMapping("/calculate")
    public NutritionResponse calculate(
            @RequestBody NutritionRequest request) {

        return service.calculateNutrition(
                request.getFoodName(),
                request.getQuantity());
    }
}