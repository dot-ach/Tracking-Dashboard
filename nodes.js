// Containers
const periodsContainer = document.querySelector('.perfil-days');
const cardContainers = [...document.querySelectorAll('.card')];

cardContainers[1].addEventListener('click', event => {
  if(event.target.nodeName === 'DIV'  && event.path[1].className === 'info-cards'){
    console.log('OK');
    console.log(event);
  }
})

console.log(cardContainers[1]);