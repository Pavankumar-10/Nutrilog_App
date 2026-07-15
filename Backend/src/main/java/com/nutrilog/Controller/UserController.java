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

import com.nutrilog.Entity.User;
import com.nutrilog.Service.UserService;



@RestController
@RequestMapping("/api/users")
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getUsers() {
        return userService.getAllUsers();
    }
    
    @PostMapping
    public User addUser(@RequestBody User user) {
    	 System.out.println("Inside addUser Controller");
        return userService.saveUser(user);
    }
    
    @GetMapping("/profile")
    public User getProfile() {
    	 System.out.println("Inside Profile Controller");

        return userService.getLoggedInUser();

    }
    
    @GetMapping("/{id}")
    public User getUser(@PathVariable Integer id) {
        return userService.getUserById(id);
    }
    
    @PutMapping("/profile")
    public User updateUser(@RequestBody User user) {
    	System.out.println("Inside Update User Controller");
        return userService.updateUser(user);
    }
    
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable Integer id) {

        userService.deleteUser(id);

        return "User Deleted";
    }
    
  
    
//    @PostMapping("/login")
//    public User login(@RequestBody User user) {
//
//        return userService.login(
//            user.getEmail(),
//            user.getPassword()
//        );
//}
}