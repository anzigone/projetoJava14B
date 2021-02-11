package br.paduan.eventdashapi.repository;

import org.springframework.data.repository.CrudRepository;

import br.paduan.eventdashapi.model.Equipamento;

public interface EquipamentoRepo extends CrudRepository <Equipamento, Integer>{
    
}