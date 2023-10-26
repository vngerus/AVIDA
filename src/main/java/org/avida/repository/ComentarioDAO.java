package org.avida.repository;

import org.avida.models.Comentario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface ComentarioDAO extends JpaRepository<Comentario, Long> {
}
