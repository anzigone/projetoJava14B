package br.paduan.eventdashapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.paduan.eventdashapi.model.Equipamento;
import br.paduan.eventdashapi.repository.EquipamentoRepo;

@RestController // Indica que a classe irá responder protocolos HTTP (GET/POST)
@CrossOrigin("*")
@RequestMapping("/equipamento")
public class EquipamentoController {

	@Autowired // indica que o gerenciamento do atributo sera feito pelo Spring
	private EquipamentoRepo repo;
	
	@GetMapping("/all")
	public ResponseEntity<List<Equipamento>> getAll(){
		List<Equipamento> lista = (List<Equipamento>) repo.findAll();
		if(lista.size()==0) {
			return ResponseEntity.status(404).build();
		}
		return ResponseEntity.ok(lista);
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<Equipamento> pesquisarEquipamento(@PathVariable int id) {
		Equipamento objeto = repo.findById(id).orElse(null);
		if (objeto == null) {
			return ResponseEntity.status(404).build();
		}
		return ResponseEntity.ok(objeto);
	}
	
}