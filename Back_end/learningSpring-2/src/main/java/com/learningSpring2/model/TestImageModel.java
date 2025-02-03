package com.learningSpring2.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
@Entity
@Table(name="ImageTable")
public class TestImageModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int img_id;

    private String img_name;

    @Lob
    @Column(name = "data", columnDefinition = "MEDIUMBLOB")
    private byte[] data;

    public TestImageModel(){}
    public TestImageModel(String img_name,byte[] data){
        this.img_name=img_name;
        this.data=data;
    }

}
