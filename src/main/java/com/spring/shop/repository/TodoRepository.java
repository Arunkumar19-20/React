package com.spring.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.spring.shop.model.Todo;


public interface TodoRepository extends JpaRepository<Todo, Long> { }
