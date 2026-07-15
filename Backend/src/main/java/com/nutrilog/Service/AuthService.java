package com.nutrilog.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.nutrilog.Entity.User;
import com.nutrilog.Repository.UserRepository;
import com.nutrilog.Security.JwtUtil;
import com.nutrilog.DTO.LoginRequest;
import com.nutrilog.DTO.LoginResponse;

@Service
public class AuthService {
	

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    
    @Autowired
    private JwtUtil jwtUtil;
    
    public LoginResponse login(LoginRequest request) {

        User user =
            userRepository.findByEmail(request.getEmail());

        if (user == null) {

            return null;

        }

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            return null;

        }

        String token =
            jwtUtil.generateToken(user.getEmail());

        return new LoginResponse(

                token,

                user.getUserId(),

                user.getEmail(),

                "USER"

        );

    }

   

}