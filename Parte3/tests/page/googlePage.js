import { Selector, t } from 'testcafe'

class GooglePages {
    //Elementos web

    //barra de busqueda google
    get buscarGoogle() { return Selector("input.gLFyf"); }
        //Boton buscar google
    get btnBustarGoogle() { return Selector("//div[@class='FPdoLc tfB0Bf']//input[@class='gNO89b']"); }
        //Link Falabella.com
    get linkFalabella() { return Selector("(//h3[contains(text(),'Falabella.com')])[1]"); }

    //Metodos

    //buscar en google la sucursal y presionar enter
    async buscarEnGoogle(texto) { await t.typeText(buscarGoogle, texto).pressKey('enter') }

    //Seleccionar link Falabella.com
    async linkFalabella() { await t.click(this.linkFalabella) }

}

export default new GooglePages()