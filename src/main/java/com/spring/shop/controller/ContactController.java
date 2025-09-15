package com.spring.shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.spring.shop.model.Contact;
import com.spring.shop.repository.ContactRepository;

import java.util.List;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:5173") // allow React frontend
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    // Service-like methods inside the controller

    // Create (POST)
    @PostMapping
    public Contact saveContact(@RequestBody Contact contact) {
        return contactRepository.save(contact);
    }

    // Read all (GET)
    @GetMapping
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    // Read one (GET by ID)
    @GetMapping("/{id}")
    public Contact getContactById(@PathVariable Long id) {
        return contactRepository.findById(id).orElse(null);
    }

    // Delete (DELETE by ID)
    @DeleteMapping("/{id}")
    public String deleteContact(@PathVariable Long id) {
        contactRepository.deleteById(id);
        return "Contact deleted with ID: " + id;
    }

    // Update (PUT by ID)
    @PutMapping("/{id}")
    public Contact updateContact(@PathVariable Long id, @RequestBody Contact updatedContact) {
        return contactRepository.findById(id).map(contact -> {
            contact.setName(updatedContact.getName());
            contact.setEmail(updatedContact.getEmail());
            contact.setMessage(updatedContact.getMessage());
            return contactRepository.save(contact);
        }).orElse(null);
    }
}