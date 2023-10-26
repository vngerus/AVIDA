package org.avida.service;

import org.avida.exception.UserNotFoundException;
import org.avida.models.Usuario;
import org.avida.repository.UsuarioRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;


@Service
public class UsuarioServiceImpl implements UsuarioService{

    @Autowired
    UsuarioRepo usuarioRepo;

    @Override
    public Usuario verUsuario(Long id) {
        return usuarioRepo.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    @Override
    public List<Usuario> listarUsuarios() {
        return usuarioRepo.findAll();
    }

    @Override
    public ResponseEntity<?> crearUsuario(Usuario usuario) {
        usuarioRepo.save(usuario);
        return ResponseEntity.ok("Usuario agregado.");
    }

    @Override
    public ResponseEntity<?> modificarUsuario(Usuario usuario, Long id) {

        Optional<Usuario> optionalUsuario = usuarioRepo.findById(id);

        if (optionalUsuario.isPresent()) {
            Usuario nuevoUsuario = optionalUsuario.get();

            nuevoUsuario.setEmail(usuario.getEmail());
            nuevoUsuario.setNombre(usuario.getNombre());
            nuevoUsuario.setApellido(usuario.getApellido());
            nuevoUsuario.setPassword(usuario.getPassword());
            nuevoUsuario.setUsername("@"+usuario.getUsername());

            usuarioRepo.save(nuevoUsuario);

            return ResponseEntity.ok("Usuario modificado.");
        } else {
            throw new UserNotFoundException(id);
        }

    }

    @Override
    public ResponseEntity<?> borrarUsuarioPorId(Long id) {

        Optional<Usuario> optionalUsuario = usuarioRepo.findById(id);

        if (optionalUsuario.isPresent()) {
            usuarioRepo.deleteById(id);
            return ResponseEntity.ok("Usuario eliminado");
        } else {
            throw new UserNotFoundException(id);
        }

    }

    @Override
    public ResponseEntity<?> verificarUsuario(String email, String password) {

        Optional<?> optionalUsuario = usuarioRepo.findByEmailAndPassword(email, password);

        if (optionalUsuario.isEmpty()) {
            throw new UserNotFoundException(email, password);
        }


        return ResponseEntity.ok("Iniciando sesion...");
    }


}
