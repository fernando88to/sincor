package jus.br.cadastro.controller;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jus.br.cadastro.domain.Estado;
import jus.br.cadastro.repository.EstadoRepository;
import jus.br.cadastro.service.EstadoService;

import java.util.List;

@Path("/estado")
public class EstadoController {

    @Inject
    EstadoRepository estadoRepository;
    @Inject
    EstadoService estadoService;

    @GET
    public List<Estado> index() {
        return estadoRepository.listAll();
    }

    @POST
    @Path("/{sigla}/padrao")
    public Estado atualizarEstadoPadrao(@PathParam("sigla") String sigla) {
        return estadoService.mudarEstadoPadrao(sigla);
    }

}
