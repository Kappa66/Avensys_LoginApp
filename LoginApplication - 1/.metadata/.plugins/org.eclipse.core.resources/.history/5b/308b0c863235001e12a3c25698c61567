package com.practice.loginapplication;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginForm loginForm) {
        String username = loginForm.getUsername();
        String password = loginForm.getPassword();
        LoginAppResponse dto = new LoginAppResponse();
        // Perform authentication logic here (e.g., check against the database)

        // If successful, create a user object and return it
        User user = userRepository.findByUsername(username);
        if (user != null && password.equals(user.getPassword())) {
            dto.setMessage("success");
            dto.setStatus(200);
            dto.setBody(user);
            return ResponseEntity.ok(dto);
        } else {
            dto.setMessage("unauthorized");
            dto.setStatus(401);
            dto.setBody(null);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(dto);
        }
    }

    @GetMapping("/user-details")
    public ResponseEntity<?> getUserDetails(@RequestParam String username) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

    @GetMapping("/restricted")
    public ResponseEntity<String> getRestrictedPage() {
        // Assuming you have authenticated the user and retrieved their role
        // You can customize the logic based on the user's role
        String role = "manager"; // Replace this with the actual role retrieved from the authentication

        if ("manager".equals(role)) {
            return ResponseEntity.ok("Welcome to the restricted page!");
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("You are not authorized to access this page.");
        }
    }
}

