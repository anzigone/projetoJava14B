package br.paduan.eventdashapi.controller;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import com.fasterxml.jackson.databind.node.ObjectNode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.paduan.eventdashapi.model.Evento;
import br.paduan.eventdashapi.repository.EventoRepo;

@RestController
@CrossOrigin("*")
public class EventoController {
    
    @Autowired
    private EventoRepo repo;

    @PostMapping("/evento/data")
    public ResponseEntity <List<Evento>> buscarPorData(@RequestBody ObjectNode json) throws ParseException{      
        
        DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd");

		LocalDate ini = LocalDate.parse(json.get("dt1").asText(), fmt);
		LocalDate fim = LocalDate.parse(json.get("dt2").asText(), fmt);

        List<Evento> eventos = repo.findByDataevtBetween(ini, fim);

		if(eventos.size()==0) {
			return ResponseEntity.status(404).build();
		}
        return ResponseEntity.ok(eventos);
    }

	@GetMapping("/evento/all")
	public ResponseEntity<List<Evento>> getAll(){
		List<Evento> lista = (List<Evento>) repo.findAll();
		if(lista.size()==0) {
			return ResponseEntity.status(404).build();
		}
		return ResponseEntity.ok(lista);
	}
	@GetMapping("/evento/between")
	public ResponseEntity<List<Evento>> getBetween(){
		List<Evento> lista = (List<Evento>) repo.findAll();
		if(lista.size()==0) {
			return ResponseEntity.status(404).build();
		}
		return ResponseEntity.ok(lista);
	}	

	@GetMapping("/num_seq/{numseq}")
	public ResponseEntity<Evento> pesquisarEvento(@PathVariable int numseq) {
		Evento objeto = repo.findById(numseq).orElse(null);
		if (objeto == null) {
			return ResponseEntity.status(404).build();
			
		}
		return ResponseEntity.ok(objeto);
	}

}