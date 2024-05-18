package com.agency.server.controllers;

import com.agency.server.entities.User;
import com.agency.server.repositories.UserRepository;
import com.agency.server.dtos.LoginUserDto;
import com.agency.server.dtos.RegisterUserDto;
import com.agency.server.responses.LoginResponse;
import com.agency.server.responses.MessageResponse;
import com.agency.server.services.AuthenticationService;
import com.agency.server.services.JwtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/auth")
@RestController
public class AuthenticationController {
    private final JwtService jwtService;
    private final AuthenticationService authenticationService;

    @Autowired
    UserRepository userRepository;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> register(@RequestBody RegisterUserDto registerUserDto) {
        if (userRepository.existsByEmail(registerUserDto.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Email is already in use!"));
        }
        User user = new User(registerUserDto.getFullName(), registerUserDto.getEmail(), registerUserDto.getPassword(), registerUserDto.getPhoneNumber());
        User registeredUser = authenticationService.signup(user);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> authenticate(@RequestBody LoginUserDto loginUserDto) {
        User authenticatedUser = authenticationService.authenticate(loginUserDto);
        String jwtToken = jwtService.generateToken(authenticatedUser);
        LoginResponse loginResponse = new LoginResponse().setToken(jwtToken).setExpiresIn(jwtService.getExpirationTime());
        return ResponseEntity.ok(loginResponse);
    }

    @PostMapping("/check-token")
    public ResponseEntity<?> checkToken() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {
            return ResponseEntity.ok(new MessageResponse("Token is valid"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("Token is not valid"));
        }
    }
}
