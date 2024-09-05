//Selecciono el elemento de la página, asigno el número de página de inicio y el array que vamos a utilizar
let numberPage = document.getElementById('number-page');
let page = 1;
//let array = 'api';
//let findBy;
//Selecciono el div que tengo que generar para cada una de las imágenes y lo clono
let card = document.getElementsByClassName('card');
const divCard = card[0].cloneNode(true);
//Selecciono el elemento padre de donde colgarán los divs que voy a crear
let gridContainer = document.getElementsByClassName('grid-container')[0];

//Selecciono los elementos que voy a modificar
let item = document.getElementsByClassName('item-0');
let item1 = document.getElementsByClassName('item-1');
let item2 = document.getElementsByClassName('item-2');
let item3 = document.getElementsByClassName('item-3');
let item4 = document.getElementsByClassName('item-4');

//Selecciono el div de la clase modal
let modal = document.getElementsByClassName('modal')[0];
//selecciono los botones
let button = document.getElementsByTagName('button');

//selecciono el título para cambiar a favoritos
let title = document.getElementsByTagName('h1')[0];

//Hago la petición http por página
const getData = async () => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data = response.data.results;
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

//Creo los botones,anteriores, siguientes y volver
const createButton = () => {
    let divButton = document.getElementById('render-more');
    let prevButton = document.createElement('button');
    prevButton.textContent = 'ANTERIORES';
    prevButton.style.display = 'none';
    divButton.appendChild(prevButton);
    let nextButton = document.createElement('button');
    nextButton.textContent = 'SIGUIENTES';
    nextButton.style.display = 'none';
    divButton.appendChild(nextButton);
    let retornButton = document.createElement('button');
    retornButton.textContent = 'VOLVER';
    retornButton.style.display = 'none';
    divButton.appendChild(retornButton);
};

//crear los divs para los personajes
const createCards = (num) => {
    let cont = 0;
    while (cont < num) {
        let divCard = card[cont].cloneNode(true);
        divCard.style.display='none';
        gridContainer.appendChild(divCard);
        cont++;
    }
}

//Muestra los personajes
const showDivCharacters = async (total) => {
    let characters=await getData();
    let cont=0;
    while(cont<total){
        card[cont].style.display='inline-block';
        cont++;
    }
    printCharacters(characters);    
}

const printCharacters=(characters)=>{
    let modalButton = document.querySelectorAll('.botonera div');
    characters.map((element, index) => {
        item[index].style.backgroundImage = `url(${element.image})`;
        item1[index].textContent = element.gender;
        item2[index].textContent = element.species;
        item3[index].textContent = element.name;
        item4[index].textContent = element.status;
        item3[index].addEventListener('click', () => setFavorites(element.id, { name: element.name, image: element.image, gender: element.gender, species: element.species, status: element.status }));
        modalButton[index].addEventListener('click', () => modalContent(element.name, element.image));
    });
}

//Función para mostrar más personajes
const moreCharacters = (total) => {
    showDivCharacters(total);
    button[0].style.display = 'none';
    button[1] = (page === 1) ? button[1].style.display = 'none' : button[1].style.display = 'inline-block';
    button[2].style.display = 'inline-block';
}

//Función para cambiar de página
const nextPage = (num) => {
    page++;
    numberPage.textContent = page;
    let cont = num;
    while(cont<(card.length)){
        card[cont].style.display='none';
        cont++;
    }
    showDivCharacters(num);
    button[0].style.display = 'inline-block';
    button[1].style.display = 'none';
    button[2].style.display = 'none';
}

//Función para cambiar de página
const prevPage = (num) => {
    page--;
    numberPage.textContent = page;
    let cont = num;
    while (cont <(card.length)) {
        card[cont].style.display='none';
        cont++;
    }
    showDivCharacters(num);;
    button[0].style.display = 'inline-block';
    button[1].style.display = 'none';
    button[2].style.display = 'none';
}

const setFavorites = (id, object) => {
    window.localStorage.setItem(id, JSON.stringify(object));
}

const getFavorites = () => {
    let ids = Object.keys(localStorage);
    let favorites = [];
    ids.map((key) => {
        let data = window.localStorage.getItem(key);
        let favorite = JSON.parse(data);
        favorites.push(favorite);
    });
    //console.log(favorites);
    return favorites;
}

//Muestra los favoritos
const showDivFavorites = () => {
    //array = 'fav';
    numberPage.textContent = 'Favoritos';
    button[0].style.display = 'none';
    button[1].style.display = 'none';
    button[2].style.display = 'none';
    button[3].style.display = 'inline-block';
    let cont = 0;
    while (cont < card.length) {
        card[cont].style.display='none';
        cont++;
    }
    let characters = getFavorites();
    printCharacters(characters);
}

const returnCharacters = () => {
    page = 1;
    numberPage.textContent = page;
    button[3].style.display = 'none';
    moreCharacters(20);
}

//Lógica de la pantalla modal
const modalContent = (name, image) => {
    let nombre = document.getElementsByTagName('h1')[1];
    let content = document.getElementsByClassName('modal-content')[0];
    content.style.backgroundImage = `url(${image})`;
    content.style.backgroundSize = '100% 100%';
    nombre.textContent = name;
    return showModal();
}

// función que esconde la pantalla modal
const closeModal = () => {
    modal.className = 'modal';
}

// función que muestra la pantalla modal
const showModal = () => {
    modal.className = 'modal show-modal';
}
createCards(19);
createButton();
showDivCharacters(3);
document.getElementsByClassName('close-button')[0].addEventListener('click', closeModal);
button[0].addEventListener('click', () => moreCharacters(20));
button[1].addEventListener('click', () => prevPage(3));
button[2].addEventListener('click', () => nextPage(3));
button[3].addEventListener('click', returnCharacters);
title.addEventListener('click', showDivFavorites);
