package com.dwes.ApiRestBackEnd.controller;

import com.dwes.ApiRestBackEnd.model.Talla;
import com.dwes.ApiRestBackEnd.service.TallaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/tallas")
public class TallaController {
    private TallaService tallaService;

    @Autowired
    public TallaController(TallaService tallaService){
        this.tallaService = tallaService;
    }

    @GetMapping
    public List<Talla> findTallas(){
        return tallaService.findTallas();
    }
}
