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


function criaLi(sectionsAserCriado) {
    for(index in ingredientItems){
        let itemAtual= ingredientItems[index];
        let itemASerCriado = document.createElement('li');
        itemASerCriado.innerText=itemAtual;
        sectionsAserCriado.appendChild(itemASerCriado);
        itemASerCriado.classList.add('pixel');
    }

}
function criaUl(){
    for (index in sectionItems){
        let sectionsAtual =sectionItems[index];
        let sectionsAserCriado = document.createElement('ul');
        sectionsAserCriado.innerText=sectionsAtual;              
        sectionsList.appendChild(sectionsAserCriado);
        sectionsAserCriado.classList.add('ingredients-list')

        criaLi(sectionsAserCriado);
    } 

} 
criaUl();





let classeSelecionadaBlack =document.getElementById('black');
classeSelecionadaBlack.addEventListener('click', (evento)=> {
    document.querySelectorAll('.selected')[0].classList.remove('selected')
    document.getElementById(evento.target.id).classList.add('selected')
    

});



let classeSelecionadaOrange =document.getElementById('orange');
classeSelecionadaOrange.addEventListener('click', (evento)=> {
    document.querySelectorAll('.selected')[0].classList.remove('selected')
    document.getElementById(evento.target.id).classList.add('selected')
    
    });

let classeSelecionadaGreen =document.getElementById('green');
classeSelecionadaGreen.addEventListener('click', (evento)=> {
    document.querySelectorAll('.selected')[0].classList.remove('selected')
    document.getElementById(evento.target.id).classList.add('selected')
    });
let classeSelecionadaRed =document.getElementById('red');
classeSelecionadaRed.addEventListener('click', (evento)=> {
    document.querySelectorAll('.selected')[0].classList.remove('selected')
    document.getElementById(evento.target.id).classList.add('selected')
    });

   

     