package jus.br.cadastro.domain;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
