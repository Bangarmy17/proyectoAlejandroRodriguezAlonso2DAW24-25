package com.dwes.ApiRestBackEnd.service;

import com.dwes.ApiRestBackEnd.model.Categoria;
import com.dwes.ApiRestBackEnd.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CategoriaService {
    private CategoriaRepository categoriaRepository;

    @Autowired
    public CategoriaService(CategoriaRepository categoriaRepository){
        this.categoriaRepository = categoriaRepository;
    }

    @Transactional(readOnly = true)
    public List<Categoria> findCategorias(){
        return categoriaRepository.findAll();
    }
}
