package br.paduan.eventdashapi.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.paduan.eventdashapi.model.Evento;

public interface EventoRepo extends CrudRepository<Evento, Integer> {

    public List<Evento> findByDataevtBetweenOrderByDataevtAsc(LocalDate dataini, LocalDate datafim);
}