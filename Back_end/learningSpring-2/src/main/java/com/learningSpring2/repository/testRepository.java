package com.learningSpring2.repository;

import com.learningSpring2.model.TestModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface testRepository extends JpaRepository<TestModel,Integer> {

}
