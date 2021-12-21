

let colors = ['black','orange','green','red']
let sectionsList = document.querySelector('#pixel-board');

function limpa(){
    let  pixel =listaPixel.flat(Infinity)
    for (let i of pixel){
         i.style.backgroundColor ='white'
     }
}
function criaLi(sectionsAserCriado) {
    let listaPixels = [];
    for(let i =0; i< 5; i++ ){
      
        let itemASerCriado = document.createElement('li');
   
        itemASerCriado.addEventListener('click', pintar);
        sectionsAserCriado.appendChild(itemASerCriado);
        itemASerCriado.setAttribute('class', 'pixel');
        listaPixels.push(itemASerCriado);
                   
     }
     return listaPixels;
}
function criaUl(){
    let listaPixels = [];

    for (let j=0; j<5; j+=1){
        
        let sectionsAserCriado = document.createElement('ul');
        sectionsList.appendChild(sectionsAserCriado);
        sectionsAserCriado.setAttribute('class', 'ingredients-list')
        let pixelCriado = criaLi(sectionsAserCriado);
        
        listaPixels.push(pixelCriado);

        
    } 
  
     return listaPixels;
} 
function pintar() {

    this.style.backgroundColor =document.querySelectorAll('.selected')[0].id
 
 
}  

function selecionaCorID(cores){
    let classeSelecionada
    let listaID = []
    for (cor of cores){
        classeSelecionada = document.getElementById(cor);
        listaID.push(classeSelecionada)
    }

    return listaID

}

function criaOuvidor(listaID){

    for (elemento of listaID){

        elemento.addEventListener('click', corSelecionada)
       


    }
}
function corSelecionada(){

    document.querySelectorAll('.selected')[0].classList.remove('selected')
    this.classList.add('selected')
    
}



let  listaPixel= criaUl();
let listaID = selecionaCorID(colors)
criaOuvidor(listaID)
document.getElementById('clear-board').addEventListener('click', limpa)

