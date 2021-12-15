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