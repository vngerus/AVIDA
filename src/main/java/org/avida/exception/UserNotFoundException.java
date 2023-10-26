package org.avida.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("No se pudo encontrar el usuario con id " + id);
    }

    public UserNotFoundException(String email, String password) {
        super("No se pudo encontrar el usuario con estas credenciales ");
    }
}
