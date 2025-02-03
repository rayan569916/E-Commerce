package com.learningSpring2.repository;
import com.learningSpring2.model.TestImageModel;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface TestImageRepository extends JpaRepository<TestImageModel,Long> {

}
