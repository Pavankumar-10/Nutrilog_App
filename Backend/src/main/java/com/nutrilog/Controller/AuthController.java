package com.nutrilog.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.nutrilog.DTO.LoginRequest;
import com.nutrilog.DTO.LoginResponse;
import com.nutrilog.Service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
    	 System.out.println("Inside AuthController");
        return authService.login(request);

    }

}