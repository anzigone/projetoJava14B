package br.paduan.eventdashapi.repository;

import org.springframework.data.repository.CrudRepository;

import br.paduan.eventdashapi.model.Usuario;

public interface UsuarioRepo extends CrudRepository<Usuario, Integer> {

    public Usuario findByEmailAndSenha(String emial, String senha);
    public Usuario findByEmailOrRacf(String email, String racf);
	
}
