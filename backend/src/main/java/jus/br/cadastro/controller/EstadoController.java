package jus.br.cadastro.controller;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jus.br.cadastro.domain.Estado;
import jus.br.cadastro.repository.EstadoRepository;

import java.util.List;

@Path("/estado")
public class EstadoController {

    @Inject
    EstadoRepository estadoRepository;

    @GET
    public List<Estado> index() {
        return estadoRepository.listAll();
    }
}
