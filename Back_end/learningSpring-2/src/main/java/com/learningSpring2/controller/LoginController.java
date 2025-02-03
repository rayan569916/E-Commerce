package com.learningSpring2.controller;

import com.learningSpring2.model.LoginModel;
import com.learningSpring2.model.SignUpModel;
import com.learningSpring2.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/app")
public class LoginController {

    @Autowired
    LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<LoginModel> login(@RequestBody LoginModel loginPayLoad){
        return loginService.login(loginPayLoad);
    }

    @PostMapping("/signup")
    public ResponseEntity<SignUpModel> signUp(@RequestBody LoginModel signUpPayLoad){
        return loginService.signUp(signUpPayLoad);
    }
}
