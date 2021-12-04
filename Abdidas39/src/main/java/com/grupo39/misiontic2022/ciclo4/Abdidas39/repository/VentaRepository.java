package com.grupo39.misiontic2022.ciclo4.Abdidas39.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.grupo39.misiontic2022.ciclo4.Abdidas39.model.Venta;
import java.util.List;






public interface VentaRepository extends MongoRepository<Venta, String> {

	List<Venta> findByCodigoventa(Long codigoventa);
	List<Venta> findByCedulacliente(Long cedulacliente);
	
	
	void deleteByCodigoventa(Long codigoventa);
	void deleteByCedulacliente(Long cedulacliente);
	
}