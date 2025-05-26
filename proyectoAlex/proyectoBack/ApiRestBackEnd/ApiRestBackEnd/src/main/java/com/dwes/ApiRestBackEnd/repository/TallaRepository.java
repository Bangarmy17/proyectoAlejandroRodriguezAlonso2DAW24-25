package com.dwes.ApiRestBackEnd.repository;

import com.dwes.ApiRestBackEnd.model.Talla;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TallaRepository extends JpaRepository<Talla, Long> {
}
