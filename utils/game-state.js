const gameState = {
  current: 1,
  currentPlace: 'start',
  HP: 5,
  inventory: [],
  collectibles: [],
  name: 'arsen',
}
const places = [
  {
    name: 'snow_forest',
    bg: 'snow_forest.webp',
  },
  {
    name: 'shop_inside',
    bg: 'shop_inside.jpg',
  }
]
const main = document.querySelector('main');
console.dir(main.dataset.id)

const changePlace = (place) => {
  const currentPlace = places.find(p => p.name === place);
  main.style.backgroundImage = `url(./assets/images/${currentPlace.bg})`;
}

const observer = new MutationObserver(changePlace);
observer.observe(main,  {
  attributes: true,
  childList: false,
  subtree: false,
});

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  if (main.dataset.id === 'shop_inside') {
    main.dataset.id = 'snow_forest';
  } else {
    main.dataset.id = 'shop_inside'
  }
})