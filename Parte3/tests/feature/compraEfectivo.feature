Feature: Comprar producto

    Scenario: Comprar producto con pago en efectivo
        Given Que esttoy en google.com 
        When busco la palabra "falabella" 
        And presiono en el texto que dice "Falabella.com - Mejor Compra Online"
        And busco algún producto 
        when presiono algun producto 
        Then Debere ver la nueva página con el detalle del producto 
        And agrego a la "Bolsa" de productos
        When Voy a la "Bolsa" de compras 
        And aumento a 2 productos 
        And agrego "Garantía Extendida" de 2 años 
        When presiono el botón "Ir a Comprar"
        And Completo los datos para generar un tipo de despacho 
        And luego selecciono "Retira tu compra" 
        And selecciono un punto de retiro 
        When finalmente presiono el botón "Continuar"
        And Selecciono modo de pago “Debito y efectivo” 
        