package com.example.theater.services;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface AccountService {
    UserDetailsService userDetailsService();
}
