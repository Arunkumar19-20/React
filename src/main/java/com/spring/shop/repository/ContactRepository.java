package com.spring.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.spring.shop.model.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
}
