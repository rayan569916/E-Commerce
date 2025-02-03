package com.learningSpring2.service;

import com.learningSpring2.model.LoginModel;
import com.learningSpring2.model.SignUpModel;
import com.learningSpring2.repository.LoginRepository;
import com.learningSpring2.repository.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    LoginRepository logRepo;

    @Autowired
    SignUpRepository signRepo;

    public ResponseEntity<LoginModel> login(LoginModel loginObject) {
        LoginModel foundUser = logRepo.findByUsername(loginObject.getUsername());

        if (foundUser != null && foundUser.getPassword().equals(loginObject.getPassword())) {
            return new ResponseEntity<>(foundUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
    }

    public ResponseEntity<SignUpModel> signUp(LoginModel signUpPayLoad) {
        if(logRepo.findByUsername(signUpPayLoad.getUsername())==null){
           logRepo.save(signUpPayLoad);
            SignUpModel response = new SignUpModel("new account created",signUpPayLoad);
           return ResponseEntity.status(HttpStatus.CREATED).body(response);
        }
        else {
           SignUpModel response = new SignUpModel("no account created for",signUpPayLoad);
           return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
        }
    }
}
