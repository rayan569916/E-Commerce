package com.learningSpring2.service;

import com.learningSpring2.model.TestImageModel;
import com.learningSpring2.repository.TestImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestImageService {
    @Autowired
    private TestImageRepository TestImageRepository;

    public TestImageModel saveImage(TestImageModel image) {
        return TestImageRepository.save(image);
    }

    public List<TestImageModel> getAllImages() {
        return TestImageRepository.findAll();
    }

    public TestImageModel getImageById(long img_id) {
        return TestImageRepository.findById(img_id)
                .orElse(null);
    }
}
