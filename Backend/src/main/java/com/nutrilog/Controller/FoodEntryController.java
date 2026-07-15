package com.nutrilog.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.nutrilog.DTO.DashboardDTO;
import com.nutrilog.Entity.FoodEntry;
import com.nutrilog.Service.FoodEntryService;

@RestController
@RequestMapping("/api/food")
@CrossOrigin("*")
public class FoodEntryController {

    @Autowired
    private FoodEntryService service;

    // GET ALL
    @GetMapping
    public List<FoodEntry> getFoodEntries() {
        return service.getAllFoodEntries();
    }

    // POST
    @PostMapping
    public FoodEntry addFood(@RequestBody FoodEntry food) {
        return service.saveFood(food);
    }
    

    // GET BY ID
    @GetMapping("/{id}")
    public FoodEntry getFood(@PathVariable Integer id) {
        return service.getFoodById(id);
    }

    // UPDATE
    @PutMapping
    public FoodEntry updateFood(@RequestBody FoodEntry food) {
        return service.updateFood(food);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public String deleteFood(@PathVariable Integer id) {

        service.deleteFood(id);

        return "Food Entry Deleted";
    }
    @GetMapping("/dashboard")
    public DashboardDTO dashboard()
            {

           return service.getDashboard();
    }
    
    @GetMapping("/history")
    public List<FoodEntry> getFoodHistory() {

        return service.getFoodHistory();

    }
}
