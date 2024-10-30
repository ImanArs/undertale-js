const user_actions = document.querySelector('#user_actions');

const entity_action = (entity, action) => {
  const entity_rect = entity.getBoundingClientRect();
  const main_character_rect = main_character.getBoundingClientRect();
  const distance = 0;
  if (main_character_rect.right > entity_rect.left - distance &&
    main_character_rect.left < entity_rect.right + distance &&
    main_character_rect.bottom > entity_rect.top - distance &&
    main_character_rect.top < entity_rect.bottom + distance) {
      console.log(user_actions.firstChild);
      
    if (user_actions.children.length === 0) {
      const created_btn = document.createElement('button');
      created_btn.innerText = 'Press E to interact';
      user_actions.appendChild(created_btn);
      document.addEventListener('keydown', (event) => {
        if (event.key === 'e' && user_actions.children.length > 0) {
          action()
          user_actions.removeChild(user_actions.firstChild);
        }
      })
    } else {
      return
    }
  } else {
    if (user_actions.children.length > 0) {
      user_actions.removeChild(user_actions.firstChild);
    }
  }
}