package com.grupo39.misiontic2022.ciclo4.Abdidas39.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "productos")
public class Producto {

	@Id
	private String id;
	
	@Indexed (unique=true)
	private String codigoproducto;
	private String nombreproducto;
	private String nitproveedor;
	private String preciocompra;
	private String ivacompra;
	private String precioventa;
	public Producto() {

	}

	public Producto(String id, String codigoproducto, String nombreproducto, String nitproveedor,String preciocompra, String ivacompra,  
			 String precioventa) {
		super();
		this.id = id;
		this.codigoproducto = codigoproducto;
		this.nombreproducto = nombreproducto;
		this.nitproveedor = nitproveedor;
		this.preciocompra = preciocompra;
		this.ivacompra = ivacompra;
		this.precioventa = precioventa;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCodigoproducto() {
		return codigoproducto;
	}

	public void setCodigoproducto(String codigoproducto) {
		this.codigoproducto = codigoproducto;
	}

	public String getIvacompra() {
		return ivacompra;
	}

	public void setIvacompra(String ivacompra) {
		this.ivacompra = ivacompra;
	}

	public String getNitproveedor() {
		return nitproveedor;
	}

	public void setNitproveedor(String nitproveedor) {
		this.nitproveedor = nitproveedor;
	}

	public String getNombreproducto() {
		return nombreproducto;
	}

	public void setNombreproducto(String nombreproducto) {
		this.nombreproducto = nombreproducto;
	}

	public String getPreciocompra() {
		return preciocompra;
	}

	public void setPreciocompra(String preciocompra) {
		this.preciocompra = preciocompra;
	}

	public String getPrecioventa() {
		return precioventa;
	}

	public void setPrecioventa(String precioventa) {
		this.precioventa = precioventa;
	}


}
