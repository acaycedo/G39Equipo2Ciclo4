package com.grupo39.misiontic2022.ciclo4.Abdidas39.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//este indica a que tabla se asemeja
@Document(collection = "usuarios")
public class Usuario {
	//y este indica cual va ser el ID automatico
	@Id 
	private String id;
	private String username;
	private String password;
	private String nombrecompleto;
	private String email;
	
	public Usuario() {
		
	}
	
	
	public Usuario(String id, String username, String password, String nombrecompleto, String email) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.nombrecompleto = nombrecompleto;
		this.email = email;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getNombrecompleto() {
		return nombrecompleto;
	}


	public void setNombrecompleto(String nombrecompleto) {
		this.nombrecompleto = nombrecompleto;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}



	
	
	
}
