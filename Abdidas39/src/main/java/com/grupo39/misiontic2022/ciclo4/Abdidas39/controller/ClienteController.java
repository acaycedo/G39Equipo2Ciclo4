package com.grupo39.misiontic2022.ciclo4.Abdidas39.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.grupo39.misiontic2022.ciclo4.Abdidas39.model.Cliente;
import com.grupo39.misiontic2022.ciclo4.Abdidas39.model.Venta;
import com.grupo39.misiontic2022.ciclo4.Abdidas39.repository.ClienteRepository;
import org.springframework.dao.DuplicateKeyException;

@CrossOrigin(origins = "*")
//@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class ClienteController {

	@Autowired
	ClienteRepository clienteRepository;

	@GetMapping("/clientes")
	public ResponseEntity<List<Cliente>> getAllClientes(@RequestParam(required = false) String cedulacliente) {
		try {
			List<Cliente> clientes = new ArrayList<Cliente>();

			if (cedulacliente == null) {
				clienteRepository.findAll().forEach(clientes::add);
			} else {
				clienteRepository.findByCedulacliente(cedulacliente).forEach(clientes::add);
			}

			if (clientes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(clientes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	@GetMapping("/clientes/cedula/{cedula}")
	public ResponseEntity<ArrayList<Cliente>> getClienteByCedulacliente(@PathVariable("cedula") String cedulacliente) {
		ArrayList<Cliente> aux = (ArrayList<Cliente>) clienteRepository.findByCedulacliente(cedulacliente);
		Optional<ArrayList<Cliente>> ventaData = Optional.of(aux);

		if (ventaData.isPresent()) {
			return new ResponseEntity<>(ventaData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}

	

	@PostMapping("/clientes")
	public ResponseEntity<Cliente> createCliente(@RequestBody Cliente client) {
		try {
			Cliente _cliente = clienteRepository.save(new Cliente(client.getId(),client.getCedulacliente(),client.getCorreo(),client.getDireccion(),client.getNombrecompleto(),client.getTelefono()));
			return new ResponseEntity<>(_cliente, HttpStatus.CREATED);
		}catch (DuplicateKeyException e) {
			return new ResponseEntity<>(null, HttpStatus.CONFLICT);
		}catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PutMapping("/clientes/{id}")
	public ResponseEntity<Cliente> updateCliente(@PathVariable("id") String id, @RequestBody Cliente client) {
		Optional<Cliente> clienteData = clienteRepository.findById(id);

		if (clienteData.isPresent()) {
			Cliente _cliente = clienteData.get();
			_cliente.setCedulacliente(client.getCedulacliente());
			_cliente.setCorreo(client.getCorreo());
			_cliente.setDireccion(client.getDireccion());
			_cliente.setNombrecompleto(client.getNombrecompleto());
			_cliente.setTelefono(client.getTelefono());
			

			return new ResponseEntity<>(clienteRepository.save(_cliente), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/clientes/{id}")
	public ResponseEntity<HttpStatus> deleteCliente(@PathVariable("id") String id) {
		try {
			clienteRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@DeleteMapping("/clientes")
	public ResponseEntity<HttpStatus> deleteAllClientes() {
		try {
			clienteRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}


	@GetMapping("/cliente/{id}")
	  public ResponseEntity<Cliente> getClientesById(@PathVariable("id") String id) {
	    Optional<Cliente> clienteData = clienteRepository.findById(id);

	    if (clienteData.isPresent()) {
	      return new ResponseEntity<>(clienteData.get(), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	  }

}