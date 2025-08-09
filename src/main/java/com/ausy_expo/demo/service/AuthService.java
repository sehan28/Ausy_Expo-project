package com.ausy_expo.demo.service;

import com.ausy_expo.demo.dto.LoginRequest;
import com.ausy_expo.demo.dto.LoginResponse;
import com.ausy_expo.demo.dto.SignupRequest;
import com.ausy_expo.demo.model.User;

public interface AuthService {
    LoginResponse login(LoginRequest request);
    User signup(SignupRequest request);
}
