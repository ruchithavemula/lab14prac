package com.example.demo.repository;

import com.example.demo.model.Dress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DressRepository extends JpaRepository<Dress, Long> {}
