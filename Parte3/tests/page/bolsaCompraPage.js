import { Selector, t } from 'testcafe';

class bolsaCompraPage {
    //Elementos Web

    //Seleccionar boton ir a compra
    get btnIrCompra() { return Selector("//button[contains(text(),'Ir a comprar')]"); }
        //Seleccionar region
    const selectRegion = Selector("//select[@name='region']");
    const optionRegion = selectRegion.find('option');
    //Seleccionar Comuna
    const selectComuna = Selector("//select[@name='comuna']");
    const optionComuna = Selector('option');

    get btnContinuar() { return Selector("//button[contains(text(),'Continuar')]"); }
    get inputCalle() { return Selector("//input[@id='calle']"); }
    get inputNumero() { return Selector("//input[@id='streetNumber']"); }
    get btnAddress() { return Selector("//button[@name='useAddress']"); }

    //Retira tu producto
    get retiraProducto() { return Selector("(//h3[contains(text(),'Retira tu compra')])[1]"); }
    get btnRetira() { return Selector("(//button[@name='selectButton'])[1]"); }
    get irApagar() { return Selector("//button[contains(text(),'Continuar')]"); }

    get debitoYefectivo() { return Selector("//span[contains(text(),'Débito y efectivo')]"); }

    //Metodos

    //seleccionar boton de compra
    async btnIrCompra() { await t.click(this.btnIrCompra) }

    //Seleccionar Region del Select
    async selectRegion() { await t.click(selectRegion).click(ptionRegion) }

    //Seleccionar Comuna del Select
    async selectComuna() { await t.click(selectComuna).click(optionComuna) }

    async btnContinuar() { await t.click(this.btnContinuar) }

    async inputCalle(text) { await t.typeText(this.inputCalle, text) }

    async btnAddress() { await t.click(this.btnAddress) }

    async retiraProducto() { await t.click(this.retiraProducto) }

    async btnRetira() { await t.click(this.btnRetira) }

    async irApagar() { await t.click(this.irApagar) }

    async debitoYefectivo() { await t.click(this.debitoYefectivo) }
}

export default new bolsaCompraPage();