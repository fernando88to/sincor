package jus.br.cadastro.controller;


import io.quarkus.test.junit.QuarkusTest;
import io.restassured.common.mapper.TypeRef;
import jakarta.inject.Inject;
import jus.br.cadastro.domain.Estado;
import jus.br.cadastro.repository.EstadoRepository;
import jus.br.cadastro.service.EstadoService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static io.restassured.RestAssured.given;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;



@QuarkusTest
class
EstadoControllerTest {

    @Inject
    EstadoRepository estadoRepository;

    @Inject
    EstadoService estadoService;

    @BeforeEach
    void setUp() {
        // Salvar estado original
        estadoService.mudarEstadoPadrao("SC");
    }

    @Test
    void index() {
        List<Estado> estados = given()
                .when().get("/estado")
                .then()
                .statusCode(200)
                .contentType("application/json")
                .body("", org.hamcrest.Matchers.instanceOf(List.class))
                .body("[0]", org.hamcrest.Matchers.allOf(
                        org.hamcrest.Matchers.hasKey("id"),
                        org.hamcrest.Matchers.hasKey("nome"),
                        org.hamcrest.Matchers.hasKey("sigla"),
                        org.hamcrest.Matchers.hasKey("estadoPadrao"),
                        org.hamcrest.Matchers.aMapWithSize(4)
                ))
                .extract()
                .as(new TypeRef<List<Estado>>() {
                });

        Estado santaCatarina = estados.stream()
                .filter(estado -> estado.nome.equals("Santa Catarina"))
                .findFirst()
                .orElse(null);

        assertNotNull(santaCatarina);
        assertTrue(santaCatarina.estadoPadrao, "Estado Santa Catarina deve ser o estado padrão");
    }

    @Test
    void atualizarEstadoPadrao() {
        Estado estado = given()
                .when().post("/estado/TO/padrao")
                .then()
                .statusCode(200)
                .contentType("application/json")
                .extract()
                .as(new TypeRef<Estado>() {
                });

        assertNotNull(estado);

        Estado estadaoTocantins = estadoRepository.findBySigla("TO").get();
        assertTrue(estadaoTocantins.estadoPadrao);
    }

}
