package org.avida.controller;

import org.avida.models.Comentario;
import org.avida.service.ComentarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173/")
public class ComentarioController {

    @Autowired
    ComentarioServiceImpl comentarioService;

    @GetMapping("/listar")
    public List<Comentario> listarComentarios() {
        return comentarioService.findAll();
    }
}
