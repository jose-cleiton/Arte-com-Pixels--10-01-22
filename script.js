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

let colorList = ['black', 'orange', 'green', 'red'];

/*
paleta1 = document.getElementById('black').addEventListener('click', selecionaCor);
paleta2 = document.getElementById('orange').addEventListener('click', selecionaCor);
paleta3 = document.getElementById('green').addEventListener('click', selecionaCor);
paleta4 = document.getElementById('red').addEventListener('click', selecionaCor());
*/





let classeSelecionadaBlack =document.getElementById('black');
classeSelecionadaBlack.addEventListener('click', (evento)=> {
    document.getElementById('black').classList.remove('selected')
    document.getElementById('orange').classList.remove('selected')
    document.getElementById('green').classList.remove('selected')
    document.getElementById('red').classList.remove('selected')
    document.getElementById(evento.target.id).classList.add('selected')
    

});



let classeSelecionadaOrange =document.getElementById('orange');
classeSelecionadaOrange.addEventListener('click', (evento)=> {
    document.getElementById('black').classList.remove('selected')
    document.getElementById('orange').classList.remove('selected')
    document.getElementById('green').classList.remove('selected')
    document.getElementById('red').classList.remove('selected')
    document.getElementById(evento.target.id).classList.add('selected')
    
    });

let classeSelecionadaGreen =document.getElementById('green');
classeSelecionadaGreen.addEventListener('click', (evento)=> {
    document.getElementById('black').classList.remove('selected')
    document.getElementById('orange').classList.remove('selected')
    document.getElementById('green').classList.remove('selected')
    document.getElementById('red').classList.remove('selected')
    document.getElementById(evento.target.id).classList.add('selected')
    });
let classeSelecionadaRed =document.getElementById('red');
classeSelecionadaRed.addEventListener('click', (evento)=> {
    document.getElementById('black').classList.remove('selected')
    document.getElementById('orange').classList.remove('selected')
    document.getElementById('green').classList.remove('selected')
    document.getElementById('red').classList.remove('selected')
    document.getElementById(evento.target.id).classList.add('selected')
    });

   

/*
function selecionaCor() {
    document.getElementById('black').classList.remove('selected')
    document.getElementById('orange').classList.remove('selected')
    document.getElementById('grenn').classList.remove('selected')
    document.getElementById('red').classList.remove('selected')
    classeSelecionada.classList.add('selected')
    
}
*/