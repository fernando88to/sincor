package jus.br.cadastro.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jus.br.cadastro.domain.Estado;

@ApplicationScoped
public class EstadoRepository implements PanacheRepository<Estado> {

}
