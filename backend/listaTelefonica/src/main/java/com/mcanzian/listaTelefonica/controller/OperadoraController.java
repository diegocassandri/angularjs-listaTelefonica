package com.mcanzian.listaTelefonica.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.mcanzian.listaTelefonica.model.Operadora;
import com.mcanzian.listaTelefonica.repository.OperadoraRepositoy;

@Controller
@RequestMapping("/operadoras")
public class OperadoraController {

	@Autowired
	private OperadoraRepositoy operadoras;
	
	@CrossOrigin
	@RequestMapping(method=RequestMethod.GET)
	public @ResponseBody String listar() {
		List<Operadora> todasOperadoras = operadoras.findAll();
		
		Gson gson = new Gson();
		String json = gson.toJson(todasOperadoras);
		
		return json;
	}
	
}
