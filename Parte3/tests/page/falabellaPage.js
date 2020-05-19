import { Selector, t } from 'testcafe';

class FalabellaPage {
    //Elementos web

    //buscar producto
    get inputProducto() { return Selector("//input[@id='searchQuestionSolr']"); }
        //Seleccionar producto
    get linkProducto() { return Selector("(//b[contains(text(),'Consola PS4 Slim')])[1]"); }

    //Metodos
    async inputProducto(text) { await t.typeText(this.inputProducto, text).pressKey('enter') }

    async linkProducto() { await t.click(this.linkProducto) }

}

export default new FalabellaPage();