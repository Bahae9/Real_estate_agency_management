package com.agency.server.exeptions;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;

public class CustomAuthenticationException extends AuthenticationException {
    private final UserDetails userDetails;

    public CustomAuthenticationException(String msg, UserDetails userDetails) {
        super(msg);
        this.userDetails = userDetails;
    }

    public UserDetails getUserDetails() {
        return userDetails;
    }
}