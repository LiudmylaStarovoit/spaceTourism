const mainTitleCrew = document.querySelector('.descrp__title'),
      subTitle = document.querySelector('.descrp__subtitle'),
      textCrew = document.querySelector('.descrp__text'),
      point = document.querySelectorAll('.point__item'),
      commander = document.querySelector('.commander'),
      specialist = document.querySelector('.specialist'),
      pilot = document.querySelector('.pilot'),
      engineer = document.querySelector('.engineer'),
      photo = document.querySelector('.info__photo');

point.forEach((item, i) => {
    item.addEventListener('click', () => {  
        point.forEach(a => {
            a.classList.remove('point-active');
        });
        item.classList.add('point-active');
    });     
});
commander.addEventListener('click', () => {
    subTitle.textContent = 'Commander';
    mainTitleCrew.textContent = 'Douglas Hurley';
    textCrew.textContent = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.';
    image.src = "./assets/crew/image-douglas-hurley.png";
    if (window.matchMedia("(min-width: 577px)").matches) {
        photo.style.width = '520px';
        photo.style.height = '695px';
    } else {
        photo.style.width = '327px';
        photo.style.height = '223px';
    }
}); 
specialist.addEventListener('click', () => {
    subTitle.textContent = 'Mission Specialist';
    mainTitleCrew.textContent = 'MARK SHUTTLEWORTH';
    textCrew.textContent = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.';
    image.src = "./assets/crew/image-mark-shuttleworth.png";
    if (window.matchMedia("(min-width: 577px)").matches) {
        photo.style.width = '450px';
        photo.style.height = '638px';
    } else {
        photo.style.width = '327px';
        photo.style.height = '223px';
    }
}); 
pilot.addEventListener('click', () => {
    subTitle.textContent = 'PILOT';
    mainTitleCrew.textContent = 'Victor Glover';
    textCrew.textContent = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64.';
    image.src = "./assets/crew/image-victor-glover.png";
    if (window.matchMedia("(min-width: 577px)").matches) {
        photo.style.width = '548px';
        photo.style.height = '665px';
    } else {
        photo.style.width = '327px';
        photo.style.height = '223px';
    }
}); 
engineer.addEventListener('click', () => {
    subTitle.textContent = 'Flight Engineer';
    mainTitleCrew.textContent = 'Anousheh Ansari';
    textCrew.textContent = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.';
    image.src = "./assets/crew/image-anousheh-ansari.png";
    if (window.matchMedia("(min-width: 577px)").matches) {
        photo.style.width = '564.57px';
        photo.style.height = '600px';
    } else {
        photo.style.width = '327px';
        photo.style.height = '223px';
    }
}); 
