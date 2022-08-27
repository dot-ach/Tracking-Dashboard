//Elements
const periodsContainer = document.querySelector('.perfil-days')

periodsContainer.addEventListener('click',(event) =>{
  if(event.target.nodeName === 'LI'){
    if(event.target.outerText === 'Monthly'){
      console.log('Monthly!!!!');
    }else if(event.target.outerText === 'Daily'){
      console.log('Daily!!');
    }else if(event.target.outerText === 'Weekly'){
      console.log('Weekly!!!');
    }
    // console.log(event.target.outerText)
    
    // alert('hola');
  }
})
// console.log(periodsContainer);
