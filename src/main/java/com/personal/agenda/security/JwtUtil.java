package com.personal.agenda.security;

import com.personal.agenda.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtUtil {

    // Token oluşturmak ve doğrulamak için kullanılacak gizli anahtar
    private String secret = "secretKey";

    // Kullanıcı için JWT token oluşturur
    public String generateToken(User user) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, user.getUsername());
    }

    // Token oluşturma işlemi
    private String createToken(Map<String, Object> claims, String subject) {
        return Jwts.builder()
                .setClaims(claims)  // Token içindeki ek bilgiler
                .setSubject(subject)  // Token sahibi
                .setIssuedAt(new Date(System.currentTimeMillis()))  // Token oluşturulma zamanı
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))  // Token geçerlilik süresi (10 saat)
                .signWith(SignatureAlgorithm.HS256, secret)  // Token imzalama algoritması ve gizli anahtar
                .compact();
    }

    // Token doğrulama işlemi
    public Boolean validateToken(String token, User user) {
        final String username = extractUsername(token);
        return (username.equals(user.getUsername()) && !isTokenExpired(token));
    }

    // Token'dan kullanıcı adını çıkarır
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // Token'dan belirli bir bilgiyi çıkarır
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    // Token içindeki tüm bilgileri çıkarır
    private Claims extractAllClaims(String token) {
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();
    }

    // Token'ın süresinin dolup dolmadığını kontrol eder
    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    // Token'ın geçerlilik süresini çıkarır
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
}