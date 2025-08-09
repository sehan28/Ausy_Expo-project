package com.ausy_expo.demo.service;

import com.ausy_expo.demo.model.User;
import java.util.List;

public interface UserService {
    User createUser(User user);
    User updateUser(Long id, User user);
    void deleteUser(Long id);
    User getUserById(Long id);
    List<User> getAllUsers();
}
