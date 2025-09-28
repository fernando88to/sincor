package jus.br.cadastro.domain;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "ESTADO")
public class Estado {

    @Id
    @Column(name = "ID")
    public Long id;
    @Column(name = "NOME", length = 255)
    public String nome;
    @Column(name = "SIGLA", length = 255)
    public String sigla;
    @Column(name = "ESTADO_PADRAO")
    public Boolean estadoPadrao;

    public Estado() {
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;

        Estado estado = (Estado) o;
        return Objects.equals(id, estado.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
