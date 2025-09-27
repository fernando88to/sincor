package jus.br.cadastro.controller;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import java.util.List;

import static io.restassured.RestAssured.given;

@QuarkusTest
class ComarcaControllerTest {

    @Test
    void index() {
        given()
                .when().get("/comarca")
                .then()
                .statusCode(200)
                .contentType("application/json")
                .body("", org.hamcrest.Matchers.instanceOf(List.class))
                .body("[0]", org.hamcrest.Matchers.allOf(
                        org.hamcrest.Matchers.hasKey("id"),
                        org.hamcrest.Matchers.hasKey("nome"),
                        org.hamcrest.Matchers.hasKey("entrancia"),
                        org.hamcrest.Matchers.aMapWithSize(3)
                ));
    }

}
