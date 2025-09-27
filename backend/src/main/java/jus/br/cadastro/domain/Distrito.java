package jus.br.cadastro.domain;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "DISTRITO_JUDICIARIO")
public class Distrito {
    @Id
    @Column(name = "id")
    public Long id;
    @Column(name = "NOME", length = 200, nullable = false)
    public String nome;
    @ManyToOne
    @JoinColumn(name = "ID_COMARCA", nullable = false)
    public Comarca comarca;

    public Distrito() {
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;

        Distrito distrito = (Distrito) o;
        return Objects.equals(id, distrito.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
