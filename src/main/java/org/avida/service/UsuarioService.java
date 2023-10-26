package org.avida.service;

import org.avida.models.Usuario;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UsuarioService {

    Usuario verUsuario(Long id);

    List<?> listarUsuarios();

    ResponseEntity<?> crearUsuario(Usuario usuario);

    ResponseEntity<?> modificarUsuario(Usuario usuario, Long id);

    ResponseEntity<?> borrarUsuarioPorId(Long id);

    ResponseEntity<?> verificarUsuario(String email, String password);

}
