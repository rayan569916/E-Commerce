package com.learningSpring2.controller;

import com.learningSpring2.model.TestImageModel;
import com.learningSpring2.service.TestImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/images")
public class TestImageController {

    @Autowired
    private TestImageService testImageService;

    @PostMapping("/upload")
    public ResponseEntity<TestImageModel> uploadImage(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            TestImageModel imageEntity = new TestImageModel();
            imageEntity.setImg_name(file.getOriginalFilename());
            imageEntity.setData(file.getBytes());

            TestImageModel savedImage = testImageService.saveImage(imageEntity);
            return new ResponseEntity<>(savedImage, HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get-image")
    public ResponseEntity<List<TestImageModel>> getAllImages() {
        List<TestImageModel> images = testImageService.getAllImages();
        return new ResponseEntity<>(images, HttpStatus.OK);
    }

    @GetMapping("/get-image/{img_id}")
    public ResponseEntity<TestImageModel> getImageById(@PathVariable long img_id) {
        TestImageModel image = testImageService.getImageById(img_id);
        if (image == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(image, HttpStatus.OK);
    }

}
