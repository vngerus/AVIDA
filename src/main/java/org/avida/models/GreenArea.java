package org.avida.models;

import jakarta.persistence.*;

import java.awt.*;

@Entity
@Table(name = "areas_verdes")
public class GreenArea {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private Point ubicacion;

}
