package com.ausy_expo.demo;

import com.ausy_expo.demo.model.User;
import com.ausy_expo.demo.model.enums.Role;
import com.ausy_expo.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;

@org.springframework.boot.autoconfigure.SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		org.springframework.boot.SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public CommandLineRunner addAdmin(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		return args -> {
			// ✅ FIX: Check if user exists properly using .isEmpty()
			if (userRepository.findByUsername("admin").isEmpty()) {
				User admin = new User();
				admin.setUsername("admin");
				admin.setEmail("admin@example.com");
				admin.setPassword(passwordEncoder.encode("admin123")); // Hashed
				admin.setRole(Role.ADMIN);
				admin.setActive(true);
				admin.setCreatedAt(LocalDateTime.now());
				admin.setBranch(null); // or set valid branch

				userRepository.save(admin);
				System.out.println("✅ Admin user created.");
			} else {
				System.out.println("ℹ️ Admin user already exists.");
			}
		};
	}
}
