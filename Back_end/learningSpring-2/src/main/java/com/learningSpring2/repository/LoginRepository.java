package com.learningSpring2.repository;

import com.learningSpring2.model.LoginModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<LoginModel, String> {
    LoginModel findByUsername(String username);
}
