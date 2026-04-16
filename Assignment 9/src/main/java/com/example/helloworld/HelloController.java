package com.example.helloworld;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping(value = "/", produces = MediaType.TEXT_HTML_VALUE)
    public String helloWorld() {
        return "<!DOCTYPE html>"
                + "<html>"
                + "<head><title>Hello World</title></head>"
                + "<body>"
                + "<h1>Hello-World</h1>"
                + "<p>This page is served by Spring Boot.</p>"
                + "</body>"
                + "</html>";
    }
}
