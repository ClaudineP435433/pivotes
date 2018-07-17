function menu_active() {
  const buttons = document.querySelectorAll(".menu-button");
  console.log(buttons);
  buttons.forEach((button) => {

    button.addEventListener('click', () => {
      buttons.forEach((button) => button.classList.remove('active'));
      button.classList.add('active');
    });


  });
};

export { menu_active };
