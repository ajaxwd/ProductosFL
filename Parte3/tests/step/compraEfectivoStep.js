import GooglePages from '../page/googlePage'
import FalabellaPage from '../page/falabellaPage'
import detalleProductoPage from '../page/detalleProductoPage'
import bolsaCompraPage from '../page/bolsaCompraPage'
import { When, Given, Then } from 'cucumber'
const createTestCafe = require('testcafe');
var t = require('testcafe').t;

Given('Que estoy en google.com', function() {
    async function navigateURL() { t.navigateTo('www.google.com') };
})

When('busco la palabra "falabella"', function() {
    GooglePages.buscarEnGoogle('Falabella')
})

And('presiono en el texto que dice "Falabella.com - Mejor Compra Online"', function() {
    GooglePages.linkFalabella()
})

And('busco algún producto', function() {
    FalabellaPage.inputProducto('ps4')
})

When('presiono algun producto', function() {
    FalabellaPage.linkProducto()
})

Then('Debere ver la nueva página con el detalle del producto', function() {

})

And('agrego a la "Bolsa" de productos', function() {
    detalleProductoPage.btnAgregarBolsa()
})

When('Voy a la "Bolsa" de compras', function() {
    detalleProductoPage.btnAgregarBolsa()
})

And('aumento a 2 productos', function() {
    detalleProductoPage.agregarProducto()
})

And('agrego "Garantía Extendida" de 2 años', function() {
    detalleProductoPage.agregarGarantia()
})

When('presiono el botón "Ir a Comprar"', function() {
    detalleProductoPage.btnVerBolsa()
})

And('Completo los datos para generar un tipo de despacho', function() {
    bolsaCompraPage.btnIrCompra()
    bolsaCompraPage.selectRegion()
    bolsaCompraPage.selectComuna()
    bolsaCompraPage.btnContinuar()
    bolsaCompraPage.inputCalle()
    bolsaCompraPage.btnAddress()
})

And('luego selecciono "Retira tu compra"', function() {
    bolsaCompraPage.retiraProducto()
})

And('selecciono un punto de retiro', function() {
    bolsaCompraPage.btnRetira()
})

When('finalmente presiono el botón "Continuar"', function() {
    bolsaCompraPage.irApagar()
})

And('Selecciono modo de pago “Debito y efectivo”', function() {
    bolsaCompraPage.debitoYefectivo()
})