package com.learningSpring2.controller;

import com.learningSpring2.model.TestModel;
import com.learningSpring2.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TestController {

    @Autowired
    TestService service;

    @GetMapping("/allProducts")
    public List<TestModel> getProducts(){
        return service.getProduct();
    }
    @GetMapping("/products/{prodId}")
    public TestModel getProductById(@PathVariable int prodId){
        return service.getProductById(prodId);
    }

    @PostMapping("/add-product")
    public void addProduct(@RequestBody TestModel prod){
        service.addProduct(prod);
    }

    @PutMapping("/update-product")
    public void updateProduct(@RequestBody TestModel prod){
        service.updateProduct(prod);
    }

    @DeleteMapping("/delete-product/{prodId}")
    public void deleteProduct(@PathVariable int prodId){
        service.deleteProduct(prodId);
    }
}
