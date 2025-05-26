package com.dwes.ApiRestBackEnd.service;


import com.dwes.ApiRestBackEnd.model.Talla;
import com.dwes.ApiRestBackEnd.repository.TallaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class TallaService {
    private TallaRepository tallaRepository;

    @Autowired
    public TallaService(TallaRepository tallaRepository){
        this.tallaRepository = tallaRepository;
    }

    @Transactional(readOnly = true)
    public List<Talla> findTallas(){
        return tallaRepository.findAll();
    }
}
