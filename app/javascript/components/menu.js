function menu_active() {
  const buttons = document.querySelectorAll(".menu-button");
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((button) => button.classList.remove('active'));
      button.classList.add('active');
    });


  });
};


function onScroll() {
  const banners = document.querySelectorAll(".banner");
  const buttons = document.querySelectorAll(".menu-button");
  const index = document.getElementById('index-button');
  const portfolio = document.getElementById('portfolio-button');
  const contact = document.getElementById('contact-button');

  const indexPos = findPos(document.getElementById('index'));
  const portfolioPos = findPos(document.getElementById('portfolio'));
  const contactPos = findPos(document.getElementById('contact'));

  window.addEventListener("scroll", function(event) {
    var top = this.scrollY;
    console.log("top " +top);
    console.log(contactPos[0]-30);
    if (top > (portfolioPos[0]-10) && top < (contactPos[0]-30)) {
      buttons.forEach((button) => button.classList.remove('active'));
      portfolio.classList.add('active');
    } else if (top >= (contactPos[0])-30){

      buttons.forEach((button) => button.classList.remove('active'));
      contact.classList.add('active');
    } else {
      buttons.forEach((button) => button.classList.remove('active'));
      index.classList.add('active');
    }

  });
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}

export { menu_active };
export { onScroll };
