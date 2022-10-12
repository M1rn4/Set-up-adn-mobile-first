// eslint-disable-next-line no-unused-vars
const works = [
  {
    id: '1',
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    options: ['CANOPY ', 'Back End Dev', '2015'],
    options_img: './image/Counter.png',
    image_mobile: './image/works_1.png',
    image_desktop: './image/desktop/card1.png',
    image_description: 'My first project',
    desktopImage: './images/projects/musicFestival.png',
    languages: ['html', 'css', 'javascript'],
    button: 'See Project',
    liveURL: '#',
    sourceURL: 'https://github.com/M1rn4/Set-up-adn-mobile-first',
  },
  {
    id: '2',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    options: ['CANOPY ', 'Back End Dev', '2015'],
    options_img: './image/Counter.png',
    image_mobile: './image/works_2.png',
    image_desktop: './image/desktop/card2.png',
    image_description: 'My second project',
    desktopImage: './images/projects/musicFestival.png',
    languages: ['html', 'css', 'javascript'],
    button: 'See Project',
    liveURL: '#',
    sourceURL: 'https://github.com/M1rn4/Set-up-adn-mobile-first',
  },
  {
    id: '3',
    title: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    options: ['CANOPY ', 'Back End Dev', '2015'],
    options_img: './image/Counter.png',
    image_mobile: './image/works_3.png',
    image_desktop: './image/desktop/card3.png',
    image_description: 'My third project',
    desktopImage: './images/projects/musicFestival.png',
    languages: ['html', 'css', 'javascript'],
    button: 'See Project',
    liveURL: '#',
    sourceURL: 'https://github.com/M1rn4/Set-up-adn-mobile-first',
  },
  {
    id: '4',
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    options: ['CANOPY ', 'Back End Dev', '2015'],
    options_img: './image/Counter.png',
    image_mobile: './image/works_4.png',
    image_desktop: './image/desktop/card4.png',
    desktopImage: './images/projects/musicFestival.png',
    image_description: 'My fourth project',
    languages: ['html', 'css', 'javascript'],
    button: 'See Project',
    liveURL: '#',
    sourceURL: 'https://github.com/M1rn4/Set-up-adn-mobile-first',
  },
];
// eslint-disable-next-line no-unused-vars
const cardsSection = document.querySelector('#Portfolio');

// eslint-disable-next-line no-empty, no-restricted-syntax
for (const i of works) {
  cardsSection.innerHTML += `
    <div class="works_card" id="${i.id}">
      <img class="works_img" src="${i.image_mobile}" alt="${i.image_description}" />
      <img class="works_img_desktop" src="${i.image_desktop}" alt="${i.image_description}">
      <div class="sub-works_card">
        <h2 class="works_title">${i.title}</h2>
        <ul class="works_options">
          <li><a href="#" class="works_list1">${i.options[0]}</a></li>
          <li><img class="counter" src="${i.options_img[0]}" alt="" /></li>
          <li><a href="#" class="works_list">${i.options[1]}</a></li>
          <li><img class="counter" src="${i.options_img}" alt="" /></li>
          <li><a href="#" class="works_list">${i.options[2]}</a></li>
        </ul>
        <p class="works_parragraph">${i.description}</p>
        <ul class="languages">
          <li class="lang_skill">${i.languages[0]}</li>
          <li class="lang_skill">${i.languages[1]}</li>
          <li class="lang_skill">${i.languages[2]}</li>
        </ul>
        <a href="#" class="button" id=${i.id - 1}>${i.button}</a>
      </div>
    </div>
  `;
}

const modalButton = document.querySelectorAll('.button');
const modal = document.querySelector('.modal-container');
// eslint-disable-next-line no-console

// eslint-disable-next-line no-restricted-syntax
for (const index of modalButton) {
  // eslint-disable-next-line no-loop-func
  index.addEventListener('click', (e) => {
    const pos = e.target.getAttribute('id');
    // eslint-disable-next-line no-console
    console.log(pos);

    modal.style.display = 'block';

    modal.innerHTML = `
    <div class= "works_card_modal">
      <div>
        <div class="sub-works_card-modal">
          <div class= "header-modal">
            <h2 class="works_title">${works[pos].title}</h2>
            <a href="#" class="links">X</a>
        </div>
        <div class="works_options_modal">
          <ul class="ul">
            <li>${works[pos].options[0]}</li>
            <li><img class="counter" src="${works[pos].options_img}" alt="" /></li>
            <li>${works[pos].options[1]}</li>
            <li><img class="counter" src="${works[pos].options_img}" alt="" /></li>
            <li>${works[pos].options[2]}</li>
          </ul>
        </div>
      </div>
      <div class="images">
        <img class="works_img" src="${works[pos].image_mobile}" alt="${works[pos].image_description}" />
        <img class="works_img_desktop" src="${works[pos].image_desktop}" alt="${works[pos].image_description}">
      </div>      
      <div class = "sub-works_card">
        <div>
          <p class="works_parragraph_modal">${works[pos].description}</p>
          <ul class="languages">
            <li class="lang_skill">${works[pos].languages[0]}</li>
            <li class="lang_skill">${works[pos].languages[1]}</li>
            <li class="lang_skill">${works[pos].languages[2]}</li>
          </ul>
        </div>
        <div class="source-box">
          <a href="${works[pos].liveURL}" class="btn-modal live">See live<img src="./image/modal/live.svg" alt="live image"></a>
          <a href="${works[pos].sourceURL}" class="btn-modal source">See Source<img src="./image/modal/source.svg" alt="source image"></a>
        </div>
      </div>
    </div>   
    `;
    const closeIcon = document.querySelector('#x');
    closeIcon.classList.toggle('close-icon-visible');
  });
}