package com.agency.server.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.agency.server.dtos.LoginUserDto;
import com.agency.server.entities.User;
import com.agency.server.entities.enums.UserRole;
import com.agency.server.exeptions.CustomAuthenticationException;
import com.agency.server.repositories.UserRepository;
import java.util.ArrayList;
import java.util.List;

@Service
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(
        UserRepository userRepository,
        AuthenticationManager authenticationManager,
        PasswordEncoder passwordEncoder
    ) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User signup(User input) {
        User user = new User(input.getFullName(), input.getEmail(), passwordEncoder.encode(input.getPassword()), input.getPhoneNumber());
        user.setRoles(UserRole.USER);
        return userRepository.save(user);
    }

    public User authenticate(LoginUserDto input) {
        UserDetails userDetails = userRepository.findByEmail(input.getEmail())
        .orElseThrow(() -> new CustomAuthenticationException("Invalid email. Please check and try again.", null));
        try {
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    input.getEmail(),
                    input.getPassword()
                )
            );
        } catch (AuthenticationException e) {
            throw new CustomAuthenticationException("Invalid password. Please check and try again.", userDetails);
        }
        return (User)userDetails;
    }

    public List<User> allUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }
}
