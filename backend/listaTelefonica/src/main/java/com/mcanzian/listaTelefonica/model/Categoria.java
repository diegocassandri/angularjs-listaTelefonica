package com.mcanzian.listaTelefonica.model;

import com.google.gson.annotations.SerializedName;

public enum Categoria {
	
	@SerializedName("Celular")
	CELULAR("Celular"),
	
	@SerializedName("Fixo")
	FIXO("Fixo");
	
	private String descricao;
	
	private Categoria(String descricao) {
		this.descricao = descricao;
	}
	
	public String getDescricao() {
		return descricao;
	}
}
