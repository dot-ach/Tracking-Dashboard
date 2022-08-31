// Fetch json
const fetchFunction = async () => {
  const res = await fetch('./data.json');
  const data = await res.json();
  return data;
  // console.log(data);
}

//Container's listener 
periodsContainer.addEventListener('click',(event) =>{
  // const elements = await fetchFunction();
  // console.log(elements);
  if(event.target.nodeName === 'LI'){
    if(event.target.outerText === 'Monthly'){
      pushElements();
      // console.log('Monthly!!!!');
    }else if(event.target.outerText === 'Daily'){
      console.log('Daily!!');
    }else if(event.target.outerText === 'Weekly'){
      console.log('Weekly!!!');
    }
    // console.log(event.target.outerText)
  }
})

const pushElements = async () => {
  const elements = await fetchFunction();

  const arrayMonthlyCurrentHours = elements.flatMap(item => item.timeframes.monthly.current);
  const arrayMonthlyPreviousHours = elements.flatMap(item => item.timeframes.monthly.previous);

  const arrayDailyCurrentHours = elements.flatMap(item => item.timeframes.daily.current);
  const arrayDailyPreviousHours = elements.flatMap(item => item.timeframes.daily.previous);

  const arrayWeeklyCurrentHours = elements.flatMap(item => item.timeframes.weekly.current);
  const arrayWeeklyPreviousHours = elements.flatMap(item => item.timeframes.weekly.previous);
  
  arrayHours.forEach(item => {
    console.log(item.innerText);
    item.innerText = 112 + 'hrs';
  })
  // console.log(elements[0].timeframes.monthly.current);
}
