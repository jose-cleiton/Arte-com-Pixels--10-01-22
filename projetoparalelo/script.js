class Paleta {
    constructor(){
        this.cores = ['black','orange','green','red']
        this.selecionaCorID()
        this.criaOuvidor()



    }
    selecionaCorID(){
        let classeSelecionada
        this.listaID = []
        for (let cor of this.cores){
            classeSelecionada = document.getElementById(cor);
            this.listaID.push(classeSelecionada)
        }
        
    
    
    }

    criaOuvidor(){

        for (let elemento of this.listaID){
    
            elemento.addEventListener('click', this.corSelecionada)
           
    
    
        }
    }

    corSelecionada(){

        document.querySelectorAll('.selected')[0].classList.remove('selected')
        this.classList.add('selected')
        
    }


}


class Pixel {
    constructor(linha) {
        
        this.pixel = document.createElement('li');
        
        this.pixel.setAttribute('class', 'pixel')
        this.pixel.addEventListener('click', this.pintar);
        
        linha.appendChild(this.pixel);
        


    }

    pintar(){
        this.style.backgroundColor =document.querySelectorAll('.selected')[0].id


    }

    limpaPixel(){
        this.pixel.style.backgroundColor = 'white'

    }




  }


class Linha {
    constructor(largura){
        this.board = document.querySelector('#pixel-board');
        this.linha = document.createElement('ul');
        this.linha.setAttribute('class', 'ingredients-list')
        this.board.appendChild(this.linha);
        let listaPixels = this.criaPixels(largura)
        return listaPixels
        
    }

    criaPixels(qtdPixel){
        let ListaPixel = [];
        let pixelAtual;
        for (let i =0; i < qtdPixel;i++){
            pixelAtual = new Pixel(this.linha)
            ListaPixel.push(pixelAtual)
        }
        return ListaPixel
        

    }


}

class Tela{
    constructor(altura,largura){
        this.altura = altura;
        this.largura = largura;
        this.ListaLinhas = []
        this.criaLinhas()
    }

    criaLinhas(){
        let linhaAtual;
        for (let i = 0; i<this.altura;i++){
            linhaAtual = new Linha(this.largura)
            this.ListaLinhas.push(linhaAtual)
        }
        
        


    }
    limpar(listaPixels){

        for (let pixel of listaPixels){
            pixel.limpaPixel()
        }


    }
}
new Paleta()
let tela = new Tela(5,5)
 

document.getElementById('clear-board').addEventListener('click',() =>{
    let listaPixels = tela.ListaLinhas.flat(Infinity)
    tela.limpar(listaPixels)
})








