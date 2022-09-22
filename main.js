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
      pushElements('daily')
      console.log('Daily!!');
    }else if(event.target.outerText === 'Weekly'){
      pushElements('weekly')
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
  
  console.log(timeFrames);
  // Time Frames Monthly
  const timeFramesPreviousMonthly =  timeFrames.flatMap(item => item.monthly).flatMap(item => item.previous);
  const timeFramesCurrentMonthly =  timeFrames.flatMap(item => item.monthly).flatMap(item => item.current);
  // Time Frames Monthly
  const timeFramesPreviousWeekly =  timeFrames.flatMap(item => item.weekly).flatMap(item => item.previous);
  const timeFramesCurrentWeekly =  timeFrames.flatMap(item => item.weekly).flatMap(item => item.current);
  // Time Frames Monthly
  const timeFramesPreviousDaily =  timeFrames.flatMap(item => item.daily).flatMap(item => item.previous);
  const timeFramesCurrentDaily =  timeFrames.flatMap(item => item.daily).flatMap(item => item.current);
  

  console.log(timeFramesCurrentDaily, timeFramesPreviousDaily);

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
    let hours = '';
    let hourPerWeek = '';
    if(period === 'monthly'){
      hours = document.createTextNode(`${timeFramesCurrentMonthly[counter]}hrs`);
      hourPerWeek = document.createTextNode(`Last Week - ${timeFramesPreviousMonthly[counter]}hrs`);
      console.log(period);
    }else if(period === 'daily'){
      hours = document.createTextNode(`${timeFramesCurrentDaily[counter]}hrs`);
      hourPerWeek = document.createTextNode(`Last Week - ${timeFramesPreviousDaily[counter]}hrs`);
      console.log(period);
    }else if(period === 'weekly'){
      hours = document.createTextNode(`${timeFramesCurrentWeekly[counter]}hrs`);
      hourPerWeek = document.createTextNode(`Last Week - ${timeFramesPreviousWeekly[counter]}hrs`);
      console.log(period);
    };

    
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
