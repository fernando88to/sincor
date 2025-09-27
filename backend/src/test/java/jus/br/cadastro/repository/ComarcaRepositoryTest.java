package jus.br.cadastro.repository;

import io.quarkus.test.junit.QuarkusTest;
import jakarta.inject.Inject;
import jus.br.cadastro.domain.Comarca;
import org.junit.jupiter.api.Test;

import java.util.Comparator;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@QuarkusTest
class ComarcaRepositoryTest {

    @Inject
    ComarcaRepository comarcaRepository;


    @Test
    public void testListOrderByNomeAsc() {
        // Chama o método que está sendo testado
        List<Comarca> comarcas = comarcaRepository.listOrderByNomeAsc();

        assertNotNull(comarcas);
        assertFalse(comarcas.isEmpty());

        // Verifica se a lista está ordenada pelo nome
        assertEquals(comarcas.stream()
                .sorted(Comparator.comparing(c -> c.nome))
                .toList(), comarcas);

        // Verifica se cada elemento está ordenado em relação ao próximo
        for (int i = 0; i < comarcas.size() - 1; i++) {
            assertTrue(comarcas.get(i).nome.compareTo(comarcas.get(i + 1).nome) <= 0);
        }

    }

}
