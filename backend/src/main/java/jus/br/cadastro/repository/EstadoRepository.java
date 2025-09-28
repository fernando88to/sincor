package jus.br.cadastro.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jus.br.cadastro.domain.Estado;

import java.util.Optional;

@ApplicationScoped
public class EstadoRepository implements PanacheRepository<Estado> {

    public Optional<Estado> findBySigla(String sigla) {
        return find("sigla", sigla).firstResultOptional();
    }
}
