package com.learningSpring2.model;

import com.learningSpring2.model.LoginModel;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.stereotype.Component;

import jakarta.persistence.*;

@Data
@Component
@Entity
@Table(name="signUp_table")
public class SignUpModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long signUpId;

    private String message;

    @OneToOne(cascade = CascadeType.ALL) // Ensure you manage the relationship correctly
    @JoinColumn(name = "username") // Map to the username
    private LoginModel user;

    public SignUpModel() {}

    public SignUpModel(String message, LoginModel user){
        this.message=message;
        this.user=user;
    }
}
