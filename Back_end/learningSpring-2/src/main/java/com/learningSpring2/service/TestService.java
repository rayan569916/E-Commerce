package com.learningSpring2.service;

import com.learningSpring2.model.TestModel;
import com.learningSpring2.repository.testRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class TestService {
//    private List<TestModel> model = new ArrayList<>();

    @Autowired
    testRepository repo;


    public List<TestModel> getProduct() {
        return repo.findAll();
    }

    public TestModel getProductById(int prodId) {
        return repo.findById(prodId).orElse(new TestModel());
    }

    public void addProduct(TestModel prod) {
        repo.save(prod);
    }

    public void updateProduct(TestModel prod) {
       repo.save(prod);
    }

    public void deleteProduct(int prodId) {
      repo.deleteById(prodId);
          }
}
