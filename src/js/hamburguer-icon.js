document.addEventListener('DOMContentLoaded', function () {
    const toggleIcons = document.querySelector('#nav-icon3');
      toggleIcons.addEventListener('click', () => {
        toggleIcons.classList.toggle('open');
      });
    });

// hamburguer-icon.js
export function toggleBurgerIcon() {
  const burgerIcon = document.getElementById("nav-icon3");
  burgerIcon.classList.toggle("open");
}

export function setBurgerIcon(open) {
  const burgerIcon = document.getElementById("nav-icon3");
  if (open) {
    burgerIcon.classList.add("open");
  } else {
    burgerIcon.classList.remove("open");
  }

}


  