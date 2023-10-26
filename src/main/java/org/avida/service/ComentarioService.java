package org.avida.service;

import org.avida.models.Comentario;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ComentarioService {

    List<Comentario> findAll();
}
