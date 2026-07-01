package com.nutrilog.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nutrilog.Entity.User;


public interface UserRepository extends JpaRepository<User, Integer> {

 User findByEmail(String email);

}