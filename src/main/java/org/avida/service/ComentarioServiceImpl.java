package org.avida.service;

import org.avida.models.Comentario;
import org.avida.repository.ComentarioDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ComentarioServiceImpl implements ComentarioService{

    @Autowired
    private ComentarioDAO comentarioDAO;

    @Override
    @Transactional(readOnly = true)
    public List<Comentario> findAll() {
        return comentarioDAO.findAll();
    }
}
