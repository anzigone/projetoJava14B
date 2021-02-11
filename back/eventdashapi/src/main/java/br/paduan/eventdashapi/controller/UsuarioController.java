package br.paduan.eventdashapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.paduan.eventdashapi.model.Usuario;
import br.paduan.eventdashapi.repository.UsuarioRepo;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	private UsuarioRepo repo;

	@PostMapping("/login") //Metodo POST não passa o usuário e senha no corpo da URL
	public ResponseEntity<Usuario> login(@RequestBody Usuario usuario) {
		Usuario userFound = repo.findByEmailOrRacf(usuario.getEmail(), usuario.getRacf());

		if (userFound != null){
			// achou usuário no banco
			if (userFound.getSenha().equals(usuario.getSenha()) ){
				userFound.setSenha("********");
				return ResponseEntity.ok(userFound); 
			}
		}

		return ResponseEntity.status(404).build(); // usuário não existe ou senha inválida
	}

}
