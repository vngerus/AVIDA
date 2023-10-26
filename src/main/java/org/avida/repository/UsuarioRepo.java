package org.avida.repository;

import org.avida.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepo extends JpaRepository<Usuario, Long> {

    Optional<?> findByEmailAndPassword(String email, String password);


}
