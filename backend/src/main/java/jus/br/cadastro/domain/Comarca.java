package jus.br.cadastro.domain;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "COMARCA")
public class Comarca extends PanacheEntityBase {

    @Id
    @Column(name = "ID")
    public Long id;
    @Column(name = "NOME", length = 200)
    public String nome;
    @Column(name = "ENTRANCIA")
    public Integer entrancia;
    @ManyToOne
    @JoinColumn(name = "ID_ESTADO", nullable = false)
    public Estado estado;

    public Comarca() {
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comarca comarca = (Comarca) o;
        return Objects.equals(id, comarca.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
