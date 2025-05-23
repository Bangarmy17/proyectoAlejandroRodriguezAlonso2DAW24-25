package com.dwes.ApiRestBackEnd.repository;

import com.dwes.ApiRestBackEnd.model.Rol;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RolRepository extends JpaRepository<Rol,Long> {
    Optional<Rol> findByName(String name);
}
