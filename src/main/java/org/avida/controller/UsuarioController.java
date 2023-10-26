package org.avida.controller;

import org.avida.models.Usuario;
import org.avida.service.UsuarioService;
import org.avida.service.UsuarioServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:5173")

public class UsuarioController {

    @Autowired
    UsuarioServiceImpl usuarioService;

    @GetMapping("/listar")
    public List<Usuario> listar() {
        return usuarioService.listarUsuarios();
    }

    @GetMapping("/ver/{id}")
    public Usuario verUsuarioPorId(@PathVariable Long id) {
        return usuarioService.verUsuario(id);
    }


    @PostMapping("/nuevo")
    public ResponseEntity<?> crear(@RequestBody Usuario usuario) {
        return usuarioService.crearUsuario(usuario);
    }

    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> borrar(@PathVariable Long id) {
        return usuarioService.borrarUsuarioPorId(id);
    }

    @PutMapping("/modificar/{id}")
    public ResponseEntity<?> modificar(@PathVariable Long id, @RequestBody Usuario usuario) {
        return usuarioService.modificarUsuario(usuario, id);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> login(@RequestBody String email, @RequestBody String password) {
        return usuarioService.verificarUsuario(email, password);
    }

}
