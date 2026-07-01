package com.nutrilog.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nutrilog.Entity.FoodMaster;

public interface FoodMasterRepository
        extends JpaRepository<FoodMaster,Integer> {

    FoodMaster findByFoodName(String foodName);

}