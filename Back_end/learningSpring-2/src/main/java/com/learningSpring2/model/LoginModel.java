package com.learningSpring2.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
@Entity
@Table(name = "login_table")
public class LoginModel {

    @Id
    private String username;

    private String password;

    public LoginModel(){}

    public LoginModel(String username, String password){
        this.username=username;
        this.password=password;
    }
}
