let ingredientItems = [
    '',
    '',
    '',
    '',
    ''
]
let sectionItems = [
    '',
    '',
    '',
    '',
    ''
]


let sectionsList = document.querySelector('#pixel-board');
let ingredientListPai = document.querySelector('#pixel-board');
let enderecoPixelIndividual=[];

function criaLi(sectionsAserCriado) {
    let listaPixels = [];
    for(let i in ingredientItems){
        let itemAtual= ingredientItems[i];
        let itemASerCriado = document.createElement('li');
        itemASerCriado.innerText=itemAtual;
        itemASerCriado.addEventListener('click', pintar);
        sectionsAserCriado.appendChild(itemASerCriado);
        itemASerCriado.setAttribute('class', 'pixel');
        listaPixels.push(itemASerCriado);
                   
     }
     return listaPixels;
}
function criaUl(){
    let listaPixels = [];

    for (let j in sectionItems){
        
        let sectionsAtual =sectionItems[j];
        let sectionsAserCriado = document.createElement('ul');
        sectionsAserCriado.innerText=sectionsAtual;              
        sectionsList.appendChild(sectionsAserCriado);
        sectionsAserCriado.setAttribute('class', 'ingredients-list')
        let pixelCriado = criaLi(sectionsAserCriado);
        
        listaPixels.push(pixelCriado);

        
    } 
  
     return listaPixels;
} 
    var listaPixel= criaUl();

let colors = ['black','orange','green','red']

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


let listaID = selecionaCorID(colors)

criaOuvidor(listaID)


    function corSelecionada(){

        document.querySelectorAll('.selected')[0].classList.remove('selected')
        this.classList.add('selected')
        
    }


 function pintar() {

   this.style.backgroundColor =document.querySelectorAll('.selected')[0].id


 }  



 document.getElementById('clear-board').addEventListener('click', ()=>{
          let  pixel =listaPixel.flat(Infinity)
          for (let i of pixel){
                i.style.backgroundColor ='white'


           }
    
 })