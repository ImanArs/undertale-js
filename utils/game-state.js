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
    bg: 'snow_forest-location.webp',
  },
  {
    name: 'shop_inside',
    bg: 'shop_inside-location.jpg',
  }
]
const main = document.querySelector('main');

const shopHtml = `
  <button>Buy</button>
  <button>Sell</button>
`
const changePlace = (place) => {
  const currentPlace = places.find(p => p.name === place);
  main.style.backgroundImage = `url(./assets/locations/${currentPlace.bg})`;
  console.log('place changed', place);
  main.innerHTML = shopHtml;
}

const observer = new MutationObserver(changePlace);
observer.observe(main,  {
  attributes: true,
  childList: false,
  subtree: false,
});
