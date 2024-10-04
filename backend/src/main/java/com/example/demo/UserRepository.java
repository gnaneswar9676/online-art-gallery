package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;

// Ensure this interface extends JpaRepository or CrudRepository
public interface UserRepository extends JpaRepository<Userss, String> {
    // Define a method to find users by username
    Userss findByUsername(String username);
}
