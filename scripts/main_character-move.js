const shop_entity = document.querySelector('#shop_entity');
const body = document.querySelector('body');
const main_character = document.querySelector('#main_character');
const sans_character = document.querySelector('#sans_character');

let isArrowUpPressed = false;
let isArrowRightPressed = false;
let isArrowLeftPressed = false;
let isArrowDownPressed = false;

// Устанавливаем начальные позиции, если они не установлены
if (!main_character.style.left) main_character.style.left = '20px';
if (!main_character.style.top) main_character.style.top = '20px';

document.addEventListener('keydown', function(event) {
  const ArrowUp = event.key === 'ArrowUp';
  const ArrowRight = event.key === 'ArrowRight';
  const ArrowLeft = event.key === 'ArrowLeft';
  const ArrowDown = event.key === 'ArrowDown';

  // Устанавливаем флаги для нажатых клавиш
  if (ArrowUp) isArrowUpPressed = true;
  if (ArrowRight) isArrowRightPressed = true;
  if (ArrowLeft) isArrowLeftPressed = true;
  if (ArrowDown) isArrowDownPressed = true;

  // Движение персонажа
  moveCharacter();
  entity_action(shop_entity, showShopHouse);
  // entity_action(sans_character, () => console.log('this is sans'));

});

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowUp') isArrowUpPressed = false;
  if (event.key === 'ArrowRight') isArrowRightPressed = false;
  if (event.key === 'ArrowLeft') isArrowLeftPressed = false;
  if (event.key === 'ArrowDown') isArrowDownPressed = false;
});

// Функция для перемещения персонажа
function moveCharacter() {
  const currentLeft = parseInt(main_character.style.left);
  const currentTop = parseInt(main_character.style.top);

  // Позиции, которые будут установлены при движении
  let newLeft = currentLeft;
  let newTop = currentTop;

  // Обновляем новые координаты в зависимости от нажатых клавиш
  if (isArrowUpPressed) newTop -= 20;
  if (isArrowRightPressed) newLeft += 20;
  if (isArrowLeftPressed) newLeft -= 20;
  if (isArrowDownPressed) newTop += 20;

  // Проверяем столкновение с границами контейнера
  const bodyRect = body.getBoundingClientRect();
  const characterRect = {
    left: newLeft,
    top: newTop,
    right: newLeft + main_character.offsetWidth,
    bottom: newTop + main_character.offsetHeight
  };

  // Если персонаж выходит за границы body, не обновляем позицию
  if (
    characterRect.left <= bodyRect.left ||
    characterRect.top <= bodyRect.top ||
    characterRect.right >= bodyRect.right || 
    characterRect.bottom > 700
  ) {
    console.error("Вы прикоснулись к контейнеру!");
    return; // Возвращаемся, если есть столкновение
  }

  // Обновляем позицию персонажа
  main_character.style.left = newLeft + 'px';
  main_character.style.top = newTop + 'px';
}
