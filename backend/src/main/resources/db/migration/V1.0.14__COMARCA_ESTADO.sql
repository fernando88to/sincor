-- MySQL 8.0

alter table COMARCA
    add ID_ESTADO BIGINT null;

alter table COMARCA
    add constraint COMARCA_ESTADO_FK
        foreign key (ID_ESTADO) references  ESTADO (ID);
