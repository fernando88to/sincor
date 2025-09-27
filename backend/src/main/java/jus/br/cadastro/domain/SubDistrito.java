package jus.br.cadastro.domain;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "SUB_DISTRITO")
public class SubDistrito {
    @Id
    @Column(name = "ID")
    public Long id;
    @Column(name = "NOME", length = 200, nullable = false)
    public String nome;
    @ManyToOne
    @JoinColumn(name = "ID_DISTRITO", nullable = false)
    public Distrito distrito;

    public SubDistrito() {
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;

        SubDistrito distrito = (SubDistrito) o;
        return Objects.equals(id, distrito.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
