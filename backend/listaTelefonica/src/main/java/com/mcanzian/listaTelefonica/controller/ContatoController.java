package com.mcanzian.listaTelefonica.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.mcanzian.listaTelefonica.model.Contato;
import com.mcanzian.listaTelefonica.repository.ContatoRepository;

@Controller
@RequestMapping("/contatos")
public class ContatoController {

	@Autowired
	private ContatoRepository contatos;
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET)
	public @ResponseBody String listar() {
		List<Contato> todosContatos = contatos.findAll();
		
		Gson gson = new Gson();
		String json = gson.toJson(todosContatos);
		
		return json;
	}
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.POST)
	public @ResponseBody String salvar(@RequestBody String json) {
		Gson gson = new Gson();
		Contato contato = gson.fromJson(json, Contato.class);
		
		contatos.save(contato);
		
		return "200";
	}
	
}
