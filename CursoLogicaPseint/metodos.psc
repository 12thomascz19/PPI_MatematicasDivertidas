Funcion factura1 <- facturaMetodo (factura)
	factura1 <- factura * 0.2;
FinFuncion


Algoritmo negocio
	Definir edad Como Entero
	Escribir "Ingrese la edad: "
	Leer edad
	si edad > 18 Entonces
		Escribir "Ingrese el monto a pagar: "
		leer factura
	SiNo
		Escribir "Eres menor de edad"
	FinSi
	
	Escribir "El monto a pagar es $",facturaMetodo(factura)
	
FinAlgoritmo
