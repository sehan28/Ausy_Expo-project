package com.ausy_expo.demo.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
