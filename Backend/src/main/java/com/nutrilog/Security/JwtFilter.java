package com.nutrilog.Security;

import java.io.IOException;
import java.util.Collections;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.beans.factory.annotation.Autowired;
@Component
public class JwtFilter extends OncePerRequestFilter {
	
	@Autowired
	private JwtUtil jwtUtil;
	@Override
	protected void doFilterInternal(
	        HttpServletRequest request,
	        HttpServletResponse response,
	        FilterChain filterChain)
	        throws ServletException, IOException {

	    System.out.println("===== JWT FILTER =====");

	    String authHeader = request.getHeader("Authorization");
	    System.out.println("Header: " + authHeader);

	    if (authHeader != null && authHeader.startsWith("Bearer ")) {

	        String token = authHeader.substring(7);
	        System.out.println("Token: " + token);

	        boolean valid = jwtUtil.validateToken(token);
	        System.out.println("Valid: " + valid);

	        if (valid) {

	            String email = jwtUtil.extractEmail(token);
	            System.out.println("Email: " + email);

	            UsernamePasswordAuthenticationToken authentication =
	                    new UsernamePasswordAuthenticationToken(
	                            email,
	                            null,
	                            Collections.emptyList());

	            SecurityContextHolder.getContext().setAuthentication(authentication);

	            System.out.println("Authentication Set");
	        }
	    }

	    filterChain.doFilter(request, response);
	}

}