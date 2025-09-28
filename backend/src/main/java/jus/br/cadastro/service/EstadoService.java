package jus.br.cadastro.service;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jus.br.cadastro.domain.Estado;
import jus.br.cadastro.repository.EstadoRepository;

import java.util.Optional;

@ApplicationScoped
public class EstadoService {

    @Inject
    EstadoRepository estadoRepository;

    @Transactional
    public Estado mudarEstadoPadrao(String sigla) {
        Optional<Estado> estado = estadoRepository.findBySigla(sigla);
        if(estado.isEmpty()) {
            throw  new IllegalArgumentException("Sigla inválida");
        }
        // 1 - Limpar todos os estados, definindo estadoPadrao como NULL
        estadoRepository.update("estadoPadrao = null");
        // 2 - Atualizar somente o estado informado para estadoPadrao = TRUE
        estadoRepository.update("estadoPadrao = true where sigla = ?1", sigla);
        return estadoRepository.findBySigla(sigla).get();
    }
}
