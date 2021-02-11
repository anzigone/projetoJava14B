package br.paduan.eventdashapi.repository;

import org.springframework.data.repository.CrudRepository;

import br.paduan.eventdashapi.model.Alarme;

public interface AlarmeRepo extends CrudRepository<Alarme, Integer> {

}