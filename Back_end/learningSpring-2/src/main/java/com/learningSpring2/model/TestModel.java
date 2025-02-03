package com.learningSpring2.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
@Entity
@Table(name ="product_table")
public class TestModel {
    @Id
    private int productId;
    private String productName;
    private int productPrice;

    public TestModel() {
    }

    public TestModel(int productsId, String productsName, int productsPrice) {
        this.productId = productsId;
        this.productName = productsName;
        this.productPrice = productsPrice;
    }
}
