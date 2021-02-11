package br.paduan.eventdashapi.controller;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import com.fasterxml.jackson.databind.node.ObjectNode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

        List<Evento> eventos = null;
        
        return ResponseEntity.ok(eventos);
    }

}