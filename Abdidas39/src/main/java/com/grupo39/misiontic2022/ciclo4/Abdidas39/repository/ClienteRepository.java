package com.grupo39.misiontic2022.ciclo4.Abdidas39.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.grupo39.misiontic2022.ciclo4.Abdidas39.model.Cliente;

public interface ClienteRepository extends MongoRepository<Cliente, String> {
	List<Cliente> findByid(String id);
	List<Cliente> findByCedulacliente(String cedulacliente);
	List<Cliente> findByCorreo(String correo);
	List<Cliente> findByDireccion(String direccion);
	List<Cliente> findByNombrecompleto(String nombrecompleto);
	List<Cliente> findByTelefono(String telefono);
	
}
