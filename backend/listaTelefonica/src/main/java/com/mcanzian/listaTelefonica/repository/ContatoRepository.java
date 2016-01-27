package com.mcanzian.listaTelefonica.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mcanzian.listaTelefonica.model.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Long> {
	
}
