package com.grupo39.misiontic2022.ciclo4.Abdidas39.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.grupo39.misiontic2022.ciclo4.Abdidas39.model.Producto;

public interface ProductoRepository extends MongoRepository<Producto, String>{
	List<Producto> findByid(String id);
	List<Producto> findByCodigoproducto(String codigoproducto);
	List<Producto> findByNombreproducto(String nombreproducto);
	

}
