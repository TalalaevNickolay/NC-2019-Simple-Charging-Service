package com.netcracker.edu.fapi.controllers;

import com.netcracker.edu.fapi.dto.User;
import com.netcracker.edu.fapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/login/{login}")
    public User getUserByLogin(@PathVariable String login) {
        return userService.getUserByLogin(login);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity getUserByEmail(@PathVariable String email){
      User user = userService.findUserByEmail(email);
      if(user == null) return ResponseEntity.notFound().build();
      else return ResponseEntity.ok().build();
    }

    @PostMapping("")
    public ResponseEntity<User> saveUser(@RequestBody User user){
        if(user != null){
            return ResponseEntity.ok(userService.saveUser(user));
        }else return null;
    }
}
