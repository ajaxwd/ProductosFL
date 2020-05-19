import { Selector, t } from 'testcafe';

class detalleProductoPage {
    //Elementos web
    get btnAgregarBolsa() { return Selector("//button[@type='button']//span[contains(text(),'Agregar a la Bolsa')]"); }
    get agregarProducto() { return Selector("//button[contains(text(),'+')]"); }
    get agregarGarantia() { return Selector("//span[contains(text(),'2 Años')]//preceding::span/input[@type='checkbox'])[3]"); }
    get btnVerBolsa() { return Selector("//div/a[contains(text(),'Ver Bolsa de Compras')]"); }
        //Metodos

    //Agergar a la bolsa el producto
    async btnAgregarBolsa() { await t.click(this.btnAgregarBolsa) }

    //Agregar un producto mas a la bolsa
    async agregarProducto() { await t.click(this.agregarProducto) }

    //Agregar garantia
    async agregarGarantia() { await t.click(this.agregarGarantia) }

    //Seleccionar boton para ver bolsa de compras
    async btnVerBolsa() { await t.click(this.btnVerBolsa) }
}

export default new detalleProductoPage();