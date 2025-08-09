package com.ausy_expo.demo.mapper;

import com.ausy_expo.demo.dto.UserDto;
import com.ausy_expo.demo.model.User;
import com.ausy_expo.demo.model.enums.Role;

public class UserMapper {
    public static User toEntity(UserDto dto) {
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());

        if (dto.getRole() != null) {
            user.setRole(Role.valueOf(dto.getRole().toUpperCase()));
        }

        return user;
    }
}
