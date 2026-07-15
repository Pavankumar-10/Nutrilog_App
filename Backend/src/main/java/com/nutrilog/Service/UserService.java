package com.nutrilog.Service;

import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nutrilog.Entity.User;
import com.nutrilog.Repository.UserRepository;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
   

    public User getLoggedInUser() {

        String email =
            SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        return userRepository.findByEmail(email);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    public User saveUser(User user) {

        user.setPassword(
                passwordEncoder.encode(user.getPassword())
        );

        return userRepository.save(user);
    }
    
    public User getUserById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }
    
    public User updateUser(User updatedUser) {

        User loggedInUser = getLoggedInUser();

        loggedInUser.setFname(updatedUser.getFname());
        loggedInUser.setMname(updatedUser.getMname());
        loggedInUser.setLname(updatedUser.getLname());
        loggedInUser.setPhone(updatedUser.getPhone());
        loggedInUser.setAge(updatedUser.getAge());
        loggedInUser.setAddress(updatedUser.getAddress());

        return userRepository.save(loggedInUser);
    }
    
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }
    
    public User login(String email, String password) {

        User user = userRepository.findByEmail(email);

        if (user != null &&
            passwordEncoder.matches(password, user.getPassword())) {

            return user;
        }

        return null;
    }
    
}
