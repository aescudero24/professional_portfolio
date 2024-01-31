$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    stagePadding: 250,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
      1400: {
        items: 3,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }

  const themeSwitchBtn = document.createElement("button");
  themeSwitchBtn.id = "themeSwitchBtn";
  themeSwitchBtn.className = "btn btn-outline-light";
  themeSwitchBtn.innerHTML = "Toggle Theme";
  themeSwitchBtn.addEventListener("click", toggleTheme);

  const navbarNav = document.getElementById("navbarNav");
  navbarNav.appendChild(themeSwitchBtn);
});
