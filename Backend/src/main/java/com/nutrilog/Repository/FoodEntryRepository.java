package com.nutrilog.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nutrilog.Entity.FoodEntry;

import java.time.LocalDate;
import java.util.List;

public interface FoodEntryRepository
       extends JpaRepository<FoodEntry,Integer>{
	
	List<FoodEntry> findByUserId(Integer userId);
	
  List<FoodEntry>findByUserIdAndEntryDate( Integer userId, LocalDate entryDate);

}

