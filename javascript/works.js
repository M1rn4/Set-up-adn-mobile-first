// eslint-disable-next-line no-unused-vars
const works = [
  {
    id: '1',
    title: 'Sales Page',
    description: 'This is a sales page, you will be able to see products for sale with their respective prices.',
    description_modal_desktop: 'This is a sales page, you will be able to see products for sale with their respective prices.It is a page that includes a shopping basket, it is responsive and has a simple style. ',
    description_modal_mobile: 'This is a sales page, you will be able to see products for sale with their respective prices.It is a page that includes a shopping basket, it is responsive and has a simple style. ',
    options: ['SalesPage', 'Back End Dev', '2022'],
    options_img: './image/Counter.png',
    image_mobile: './image/images4/6.png',
    image_desktop: './image/desktop/images3/6.png',
    desktopImage: './images/projects/musicFestival.png',
    image_description: 'SalesPage',
    tech: ['html', 'css', 'javascript', 'github', 'ruby', 'Boopstrap'],
    button: 'See Project',
    liveURL: 'https://m1rn4.github.io/Sales-Page/',
    sourceURL: 'https://github.com/M1rn4/Set-up-adn-mobile-first',
  },
  {
    id: '2',
    title: 'Conference Page',
    description: 'This page was designed for a conference presentation. ',
    description_modal_desktop: 'This page was designed for a conference presentation. In it you can find all the information about the event, from the exhibitors to the event schedule.',
    description_modal_mobile: 'This page was designed for a conference presentation. In it you can find all the information about the event, from the exhibitors to the event schedule.',
    options: ['ConferencePage', 'Back End Dev', '2022'],
    options_img: './image/Counter.png',
    image_mobile: './image/images4/5.png',
    image_desktop: './image/desktop/images/5.png',
    image_description: 'ConferencePage',
    desktopImage: './images/projects/musicFestival.png',
    tech: ['html', 'css', 'javascript', 'github', 'ruby', 'Boopstrap'],
    button: 'See Project',
    liveURL: 'https://m1rn4.github.io/Conference_page/',
    sourceURL: 'https://github.com/M1rn4/Conference_page',
  },
  {
    id: '3',
    title: 'To Do List',
    description: 'you can create your task list as you wish, add activities, delete them, modify them!',
    description_modal_desktop: 'With this project you can create your task list as you wish, add activities, delete them, modify them!It is a customized ToDoList that you can use to optimize your time and increase productivity in your work.',
    description_modal_mobile: 'With this project you can create your task list as you wish, add activities, delete them, modify them!It is a customized ToDoList that you can use to optimize your time and increase productivity in your work.',
    options: ['ToDoList', 'Back End Dev', '2022'],
    options_img: './image/Counter.png',
    image_mobile: './image/works_1.png',
    image_desktop: './image/desktop/card1.png',
    image_description: 'MyToDoList',
    desktopImage: './image/projects/musicFestival.png',
    tech: ['html', 'css', 'javascript', 'github', 'ruby', 'Boopstrap'],
    button: 'See Project',
    liveURL: 'https://m1rn4.github.io/toDoList/dist/',
    sourceURL: 'https://github.com/M1rn4/toDoList',
  },
  {
    id: '4',
    title: 'Awesome book',
    description: 'Add books with their respective authors to your liking!',
    description_modal_desktop: 'in this project you will find a page that will allow you to upload books with their respective authors. You will be able to delete them if you wish. It has a minimalist touch',
    description_modal_mobile: 'in this project you will find a page that will allow you to upload books with their respective authors. You will be able to delete them if you wish. It has a minimalist touch',
    options: ['AwesomeBooks ', 'Back End Dev', '2022'],
    options_img: './image/Counter.png',
    image_mobile: './image/works_2.png',
    image_desktop: './image/desktop/card2.png',
    image_description: 'AwesomeBook',
    desktopImage: './images/projects/musicFestival.png',
    tech: ['html', 'css', 'javascript', 'github', 'ruby', 'Boopstrap'],
    button: 'See Project',
    liveURL: 'https://m1rn4.github.io/awesome_book_es6/',
    sourceURL: 'https://github.com/M1rn4/awesome_book_es6',
  },

  {
    id: '5',
    title: 'Leader Board',
    description: 'You will be able to create your own game, add your players and their scores. You will also be able to see the scores in order.',
    description_modal_desktop: 'You will be able to create your own game, add your players and their scores. You will also be able to see the scores in order. This is the first project in the portfolio where I have used APIs. ',
    description_modal_mobile: 'You will be able to create your own game, add your players and their scores. You will also be able to see the scores in order. This is the first project in the portfolio where I have used APIs. ',
    options: ['LearderBoard', 'Back End Dev', '2022'],
    options_img: './image/Counter.png',
    image_mobile: './image/works_4.png',
    image_desktop: './image/desktop/card4.png',
    desktopImage: './images/projects/musicFestival.png',
    image_description: 'LeaderBoard',
    tech: ['html', 'css', 'javascript', 'github', 'ruby', 'Boopstrap'],
    button: 'See Project',
    liveURL: 'https://m1rn4.github.io/leaderboard/dist/',
    sourceURL: 'https://github.com/M1rn4/leaderboard',
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
          <li><img class="counter" src="${i.options_img}" alt="" /></li>
          <li><a href="#" class="works_list">${i.options[1]}</a></li>
          <li><img class="counter" src="${i.options_img}" alt="" /></li>
          <li><a href="#" class="works_list">${i.options[2]}</a></li>
        </ul>
        <p class="works_parragraph">${i.description}</p>
        <ul class="languages">
          <li class="lang_skill">${i.tech[0]}</li>
          <li class="lang_skill">${i.tech[1]}</li>
          <li class="lang_skill">${i.tech[2]}</li>
        </ul>
        <a href="#" class="button" id=${i.id - 1}>${i.button}</a>
      </div>
    </div>
  `;
}

const modalButton = document.querySelectorAll('.button');
const modal = document.querySelector('.modal-container');
// eslint-disable-next-line no-console
function close() {
  modal.style.display = 'none';
}

// eslint-disable-next-line no-restricted-syntax
for (const index of modalButton) {
  // eslint-disable-next-line no-loop-func
  index.addEventListener('click', (e) => {
    const pos = e.target.getAttribute('id');
    modal.style.display = 'block';
    modal.innerHTML = `
    <div class= "works_card_modal">
      <div>
        <div class="sub-works_card-modal_1">
          <div class= "header-modal">
            <h2 class="works_title">${works[pos].title}</h2>
            <a href="#" class="links" id ="x2">X</a>
        </div>
        <div>
          <ul class="works_options" id="works_options_id">
            <li><a href="#" class="works_list1">${works[pos].options[0]}</a></li>
            <li><img class="counter" src="${works[pos].options_img}" alt="" /></li>
            <li><a href="#" class="works_list">${works[pos].options[1]}</a></li>
            <li><img class="counter" src="${works[pos].options_img}" alt="" /></li>
            <li><a href="#" class="works_list">${works[pos].options[2]}</a></li>
          </ul>
        </div>
      </div>
      <div class="images">
        <img class="works_img" src="${works[pos].image_mobile}" alt="${works[pos].image_description}" />
        <img class="works_img_desktop" id="works_img_modal_desktop" src="${works[pos].image_desktop}" alt="${works[pos].image_description}">
      </div>      
      <div class = "sub-works_card_modal">
        <div>
          <p class="works_parragraph_modal">${works[pos].description_modal_mobile}</p>
          <ul class="languages">
            <li class="lang_skill">${works[pos].tech[0]}</li>
            <li class="lang_skill">${works[pos].tech[1]}</li>
            <li class="lang_skill">${works[pos].tech[2]}</li>
          </ul>
        </div>
        <div class="source-box">
          <a href="${works[pos].liveURL}" class="btn-modal live">See live<img src="./image/modal/live.svg" alt="live image"></a>
          <a href="${works[pos].sourceURL}" class="btn-modal source">See Source<img src="./image/modal/source.svg" alt="source image"></a>
        </div>
      </div>
      <div class = "sub-works_card_modal_2">
        <div>
          <p  class="works_parragraph_modal">${works[pos].description_modal_desktop}</p>
        </div>
        <div class= "other">
          <div>
            <ul class="languages">
              <li class="lang_skill">${works[pos].tech[0]}</li>
              <li class="lang_skill">${works[pos].tech[1]}</li>
              <li class="lang_skill">${works[pos].tech[2]}</li>
            </ul>
            <ul class="languages">
              <li class="lang_skill">${works[pos].tech[3]}</li>
              <li class="lang_skill">${works[pos].tech[4]}</li>
              <li class="lang_skill">${works[pos].tech[5]}</li>
            </ul>
          </div>
          <div class="source-box">
            <a href="${works[pos].liveURL}" class="btn-modal live">See live<img src="./image/modal/live.svg" alt="live image"></a>
            <a href="${works[pos].sourceURL}" class="btn-modal source">See Source<img src="./image/modal/source.svg" alt="source image"></a>
          </div>
        </div>
      </div>        
    </div>   
    `;
    const closeIcon = document.querySelector('#x2');
    closeIcon.addEventListener('click', close);
  });
}