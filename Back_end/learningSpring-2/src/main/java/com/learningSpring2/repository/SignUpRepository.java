package com.learningSpring2.repository;

import com.learningSpring2.model.SignUpModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SignUpRepository extends JpaRepository<SignUpModel, Long> {
}
