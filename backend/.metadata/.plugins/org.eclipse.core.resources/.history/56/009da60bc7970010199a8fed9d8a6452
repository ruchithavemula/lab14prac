package com.example.demo.controller;

import com.example.demo.model.Dress;
import com.example.demo.repository.DressRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/dresses")
@CrossOrigin(origins = "*")
public class DressController {

    private final DressRepository repository;

    public DressController(DressRepository repository) {
        this.repository = repository;
    }
    @GetMapping("/")
    public String home() {
        return "Welcome to Dress API!";
    }

    @GetMapping
    public List<Dress> getAllDresses() {
        return repository.findAll();
    }

    @PostMapping
    public Dress addDress(@RequestBody Dress dress) {
        return repository.save(dress);
    }

    @PutMapping("/{id}")
    public Dress updateDress(@PathVariable Long id, @RequestBody Dress dressDetails) {
        Dress dress = repository.findById(id).orElseThrow(() -> new RuntimeException("Dress not found"));
        dress.setName(dressDetails.getName());
        dress.setType(dressDetails.getType());
        dress.setPrice(dressDetails.getPrice());
        return repository.save(dress);
    }

    @DeleteMapping("/{id}")
    public void deleteDress(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
