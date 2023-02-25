const nav = document.querySelectorAll('.header__item'),
      navWrap = document.querySelector('.header__nav'),
      hamburger = document.querySelector('.hamburger'),
      divider = document.querySelectorAll('.active_divider'),
      navD = document.querySelectorAll('.nav__item'),
      dividers = document.querySelectorAll('.active_item'),
      moon = document.querySelector('.moon'),
      mars = document.querySelector('.mars'),
      europa = document.querySelector('.europa'),
      titan = document.querySelector('.titan'),
      image = document.querySelector('.image'),
      mainTitle = document.querySelector('.descr__title'),
      text = document.querySelector('.descr__text'),
      distance = document.querySelector('.distance'),
      travel = document.querySelector('.travel'),
      activeDiv = document.querySelectorAll('.active_items');
          
nav.forEach((item, i) => {
    item.addEventListener('mouseenter', (e) => {   
        if(item == e.target) {
            divider[i].classList.add('divider-show');
            divider[i].classList.remove('divider-hide');
        }
    });
    item.addEventListener('mouseleave', () =>{
        divider[i].classList.remove('divider-show');
        divider[i].classList.add('divider-hide');
    });      
});

function showHumburger () {
    hamburger.addEventListener('click', () => {
        navWrap.classList.toggle('header__nav_active');
        hamburger.classList.toggle('hamburger__active');
    });
}
showHumburger();

navD.forEach((item, i) => {
    item.addEventListener('mouseenter', (e) => {   
        if(item == e.target) {
            dividers[i].classList.add('item-show');
            dividers[i].classList.remove('item-hide');
        }
    });
    item.addEventListener('mouseleave', () =>{
        dividers[i].classList.remove('item-show');
        dividers[i].classList.add('item-hide');
    });          
});
navD.forEach((item, i) => {
    item.addEventListener('click', () => {  
        navD.forEach(a => {
            a.style.color = '#D0D6F9';
        });
        item.style.color = '#ffffff';
        activeDiv.forEach(a =>{
            a.classList.remove('items-show');
        });
        activeDiv[i].classList.add('items-show');
    });     
});
moon.addEventListener('click', () => {
    mainTitle.textContent = 'MOON';
    text.textContent = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
    distance.textContent = '384,400 km';
    travel.textContent = '3 days';
    image.src = './image/destination/image-moon.png';

}); 
mars.addEventListener('click', (e) => {
    mainTitle.textContent = 'MARS';
    text.textContent = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
    distance.textContent = '225 MIL. km';
    travel.textContent = '9 months';
    image.src = './image/destination/image-mars.png';
}); 
europa.addEventListener('click', (e) => {
    mainTitle.textContent = 'EUROPA';
    text.textContent = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
    distance.textContent = '628 MIL. km';
    travel.textContent = '3 years';
    image.src = './image/destination/image-europa.png';
}); 
titan.addEventListener('click', (e) => {
    mainTitle.textContent = 'TITAN';
    text.textContent = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
    distance.textContent = '1.6 BIL. km';
    travel.textContent = '7 years';
    image.src = './image/destination/image-titan.png';
}); 



