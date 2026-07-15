package com.nutrilog.Security;

import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

    private final String SECRET =
            "ThisIsMyVerySecretKeyForNutriLogProject123456";

    private Key getSigningKey() {

        return Keys.hmacShaKeyFor(SECRET.getBytes());

    }

    // Generate JWT Token
    public String generateToken(String email) {

        return Jwts.builder()

                .setSubject(email)

                .setIssuedAt(new Date())

                .setExpiration(
                        new Date(
                                System.currentTimeMillis()
                                        + 1000 * 60 * 60
                        )
                )

                .signWith(
                        getSigningKey(),
                        SignatureAlgorithm.HS256
                )

                .compact();

    }

    // Read all claims from JWT
    private Claims extractClaims(String token) {

        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();

    }

    // Read email from JWT
    public String extractEmail(String token) {

        return extractClaims(token).getSubject();

    }

    // Validate JWT
    public boolean validateToken(String token) {

        try {

            extractClaims(token);

            return true;

        } catch (Exception e) {

            e.printStackTrace();   // IMPORTANT

            return false;

        }

    }
    

}