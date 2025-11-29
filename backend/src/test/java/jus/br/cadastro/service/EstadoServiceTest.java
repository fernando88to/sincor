package jus.br.cadastro.service;

import io.quarkus.test.TestTransaction;
import io.quarkus.test.junit.QuarkusTest;
import jakarta.inject.Inject;
import jus.br.cadastro.domain.Estado;
import jus.br.cadastro.repository.EstadoRepository;
import org.junit.jupiter.api.Test;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

// @formatter:off
@QuarkusTest
@TestTransaction
public class EstadoServiceTest {

    @Inject
    EstadoService estadoService;

    @Inject
    EstadoRepository estadoRepository;

    @Test
    void deveDefinirToComoEstadoPadrao() {
        //GIVEN
            Optional<Estado> estadoOptional;
            String sigla = "MA";
        //WHEN
            estadoOptional = estadoRepository.findBySigla(sigla);
        //THEN
            assertTrue(estadoOptional.isPresent(), "Estado deve existir");
            Estado estadoAntes = estadoOptional.get();
            assertNotNull(estadoAntes);
            assertNull(estadoAntes.estadoPadrao, "Estado não deveria ser padrão antes da mudança");
        //WHEN
            Estado estadoAtualizado = estadoService.mudarEstadoPadrao(sigla);
        //THEN
            assertTrue(estadoAtualizado.estadoPadrao, "Estado deveria ser padrão após a mudança");
    }


    @Test
    void deveZerarEstadoPadraoAoPassarSiglaZero() {
        //GIVEN
            String sigla = "0";
        //WHEN
            estadoService.mudarEstadoPadrao(sigla);
            Optional<Estado> estadoPadrao = estadoRepository.findEstadoPadrao();
        //THEN
            assertTrue(estadoPadrao.isEmpty());
    }
}
