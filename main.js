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
      pushElements('monthly');
      // console.log('Monthly!!!!');
    }else if(event.target.outerText === 'Daily'){
      console.log('Daily!!');
    }else if(event.target.outerText === 'Weekly'){
      console.log('Weekly!!!');
    }
    // console.log(event.target.outerText)
  }
})

const pushElements = async (period) => {
  const elements = await fetchFunction();
  // elements.map(item => {
  //   console.log(item);
  // });
  const cardsWithoutPerson = cardContainers.slice(1,7);

  const titlesLowerCase = elements.map(item => {
    if (item.title === 'Self Care'){
      return 'self'
    }
    return item.title.toLowerCase();
  });
  const titlesNormal = elements.map(item => {
    return item.title;
  });

  const timeFrames = elements.map(item => {
    return item.timeframes
  });
  
  const timeFramesPrevious =  timeFrames.flatMap(item => item.monthly).flatMap(item => item.previous);
  const timeFramesCurrent =  timeFrames.flatMap(item => item. monthly).flatMap(item => item.current);
  // console.log(timeFramesCurrent, timeFramesPrevious);

  cardsWithoutPerson.map((item, counter=0) => {
    // const hourItemsDaily = timeFrames[counter].daily;
    // const hourItemsMonthly = timeFrames[counter].monthly;
    // const hourItemsWeekly = timeFrames[counter].weekly;
    // console.log(hourItemsDaily, hourItemsMonthly, hourItemsWeekly);
    console.log(item);
    item.innerHTML = '';
    // const container = document.createElement('section');
    // container.className = `${titlesLowerCase[counter]}-card card`;

    const background = document.createElement('div');
    background.className = 'background';

    const card = document.createElement('div');
    card.className = `info-cards`;

    const titleCardContainer = document.createElement('div');
    const titleLabel = document.createElement('p');
    const title = document.createTextNode(`${titlesNormal[counter]}`);
    titleLabel.appendChild(title);
    titleCardContainer.appendChild(titleLabel);
    // debugger;
    const infoContainer = document.createElement('div');
    const hoursLabel = document.createElement('p');
    const weekHoursLabel = document.createElement('p');
    // const hours = document.createTextNode(`si`);
    const hours = document.createTextNode(`${timeFramesCurrent[counter]}hrs`);
    const hourPerWeek = document.createTextNode(`Last Week - ${timeFramesPrevious[counter]}hrs`);
    // const hours = document.createTextNode(`10`);
    hoursLabel.appendChild(hours);
    weekHoursLabel.appendChild(hourPerWeek);
    
    // container.append(background, card);
    infoContainer.append(hoursLabel, weekHoursLabel);
    card.append(titleCardContainer, infoContainer);
    
    item.append(background,card);
    counter ++;
    
    // console.log(container);
  });
  // console.log(timeFramesWeekly);
  // console.log(elements[0].timeframes.monthly.current);
}
