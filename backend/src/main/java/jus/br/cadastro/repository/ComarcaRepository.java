package jus.br.cadastro.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import io.quarkus.panache.common.Sort;
import jakarta.enterprise.context.ApplicationScoped;
import jus.br.cadastro.domain.Comarca;

import java.util.List;


@ApplicationScoped
public class ComarcaRepository implements PanacheRepository<Comarca> {

    public List<Comarca> listOrderByNomeAsc() {
        return listAll(Sort.by("nome"));
    }


}
