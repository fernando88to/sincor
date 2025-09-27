package jus.br.cadastro.controller;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jus.br.cadastro.domain.Comarca;
import jus.br.cadastro.repository.ComarcaRepository;

import java.util.List;

@Path("/comarca")
public class ComarcaController {

    @Inject
    ComarcaRepository comarcaRepository;

    @GET
    public List<Comarca> index() {
        return comarcaRepository.listOrderByNomeAsc();
    }
}
