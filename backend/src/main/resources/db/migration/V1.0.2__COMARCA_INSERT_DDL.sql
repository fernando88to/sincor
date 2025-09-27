-- Inserção com IDs fixos para a tabela COMARCA
INSERT INTO COMARCA (ID, NOME, ENTRANCIA)
VALUES (1, 'Itajaí', 1),
       (2, 'Lages', 1),
       (3, 'Penha', 1),
       (4, 'Anita Garibaldi', 1),
       (5, 'Ponte Serrada', 1),
       (6, 'Camboriú', 1),
       (7, 'Florianópolis', 1);

ALTER TABLE COMARCA AUTO_INCREMENT = 8;
