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
  })
  const timeFramesDaily = elements.map(item => {
    return item.timeframes.daily;
  });

  const timeFramesWeekly = elements.map(item => {
    return item.timeframes.weekly;
  });

  const timeFramesMonthly = elements.map(item => {
    return item.timeframes.monthly;
  });

  cardsWithoutPerson.map((item, counter=0) => {
    
  //   <section class="work-card card">
  //   <div class="background">
  //     <!-- <img src="./images/icon-work.svg" alt="work-icon"> -->
  //   </div>
  //   <div class="info-cards">
  //     <div>
  //       <p>Work</p>
  //       <!-- <img></img> -->
  //     </div>
  //     <div>
  //       <p>32hrs</p>
  //       <p>Last Week - 36hrs</p>
  //     </div>
  //   </div>
  // </section>
    console.log(timeFrames[counter].period);
    console.log(period);
    const container = document.createElement('section');
    container.className = `${titlesLowerCase[counter]}-card card`;

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
    const hours = document.createTextNode(`si`);
    // const hours = document.createTextNode(`${timeFrames}.${period}.${[0]}`);
    const hourPerWeek = document.createTextNode(`Last week - ${32}hrs`);
    // const hours = document.createTextNode(`10`);
    hoursLabel.appendChild(hours);
    weekHoursLabel.appendChild(hourPerWeek);
    
    container.append(background, card);
    infoContainer.append(hoursLabel, weekHoursLabel);
    card.append(titleCardContainer, infoContainer);
    
    counter ++;
    console.log(container);
  });
  // console.log(timeFramesWeekly);
  // console.log(elements[0].timeframes.monthly.current);
}
