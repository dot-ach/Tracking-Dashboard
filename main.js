// Fetch json
const fetchFunction = async () => {
  const res = await fetch('./data.json');
  const data = await res.json();
  return data;
  // console.log(data);
}

//Container's listener 
periodsContainer.addEventListener('click',async (event) =>{
  // const elements = await fetchFunction();
  // console.log(elements);
  if(event.target.nodeName === 'LI'){
    if(event.target.outerText === 'Monthly'){
      console.log('Monthly!!!!');
    }else if(event.target.outerText === 'Daily'){
      console.log('Daily!!');
    }else if(event.target.outerText === 'Weekly'){
      console.log('Weekly!!!');
    }
    // console.log(event.target.outerText)
  }
})

const pushElements = () => {
  
}

// fetchFunction();
