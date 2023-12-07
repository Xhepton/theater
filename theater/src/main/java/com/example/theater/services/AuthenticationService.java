package com.example.theater.services;

import com.example.theater.dao.request.SigninRequest;
import com.example.theater.dao.request.SignupRequest;
import com.example.theater.dao.response.JwtAuthenticationResponse;

public interface AuthenticationService {

    JwtAuthenticationResponse signup(SignupRequest request);

    JwtAuthenticationResponse signin(SigninRequest request);
}
