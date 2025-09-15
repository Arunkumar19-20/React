package com.spring.shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.spring.shop.model.Todo;
import com.spring.shop.repository.TodoRepository;
import java.util.List;
@RestController
@RequestMapping("/api/todos")
@CrossOrigin(origins = "http://localhost:5173") // ✅ allow React
public class TodoController {

    @Autowired
    private TodoRepository repo;

    @GetMapping("/all")
    public List<Todo> getAll() {
        return repo.findAll();
    }

    @PostMapping("/add")
    public Todo add(@RequestBody Todo todo) {
        return repo.save(todo);
    }

    @PutMapping("/update/{id}")
    public Todo update(@PathVariable Long id, @RequestBody Todo updated) {
        updated.setId(id);
        return repo.save(updated);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
