INSERT INTO DISTRITO_JUDICIARIO (ID, NOME, ID_COMARCA)
VALUES
    -- Comarca 1: Itajaí
    (1, 'Sede (Itajaí)', 1),
    (2, 'Navegantes', 1),
    (3, 'Ilhota', 1),
    (4, 'Balneário Piçarras', 1),

    -- Comarca 2: Lages
    (5, 'Sede (Lages)', 2),
    (6, 'Otacílio Costa', 2),
    (7, 'Correia Pinto', 2),
    (8, 'Bocaina do Sul', 2),

    -- Comarca 3: Penha
    (9, 'Sede (Penha)', 3),

    -- Comarca 4: Anita Garibaldi
    (10, 'Sede (Anita Garibaldi)', 4),

    -- Comarca 5: Ponte Serrada
    (11, 'Sede (Ponte Serrada)', 5),

    -- Comarca 6: Camboriú
    (12, 'Sede (Camboriú)', 6),

    -- Comarca 7: Florianópolis
    (13, 'Florianópolis', 7);

ALTER TABLE DISTRITO_JUDICIARIO AUTO_INCREMENT = 14;
