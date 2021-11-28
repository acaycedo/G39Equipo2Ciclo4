package com.grupo39.misiontic2022.ciclo4.Abdidas39.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "clientes")
public class Cliente {
	
	@Id
	private String id;
	private String cedulacliente;
	private String nombrecompleto;
	private String direccion;
	private String telefono;
	private String correo;
	
	public Cliente() {
		
	}
	
	public Cliente(String id, String cedulacliente, String nombrecompleto,
			String direccion, String telefono, String correo) {
		super();
		this.id = id;

		this.cedulacliente = cedulacliente;
		this.nombrecompleto = nombrecompleto;
		this.direccion = direccion;
		this.telefono = telefono;
		this.correo = correo;
		
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCedulacliente() {
		return cedulacliente;
	}

	public void setCedulacliente(String cedulacliente) {
		this.cedulacliente = cedulacliente;
	}

	public String getNombrecompleto() {
		return nombrecompleto;
	}

	public void setNombrecompleto(String nombrecompleto) {
		this.nombrecompleto = nombrecompleto;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}
	

	
	

}
