package br.paduan.eventdashapi.repository;

import org.springframework.data.repository.CrudRepository;

import br.paduan.eventdashapi.model.Evento;

public interface EventoRepo extends CrudRepository<Evento, Integer> {

}