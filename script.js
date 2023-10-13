const wrapper = document.getElementById("wrapper");
const mode_button = document.getElementById("dark_light");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const brake = document.querySelector(".brake");
mode_button.textContent = mode_button.value;

mode_button.addEventListener("click", () => {
  if (mode_button.value === "Dark Mode") {
    mode_button.value = "Light Mode";
    mode_button.style.border = "3px solid black";
    mode_button.style.color = "white";
    wrapper.style.backgroundColor = "black";
    wrapper.style.color = "white";
    header.style.backgroundColor = "white";
    footer.style.backgroundColor = "white";
    brake.style.backgroundColor = "black";
  } else {
    mode_button.value = "Dark Mode";
    mode_button.style.border = "3px solid white";
    mode_button.style.color = "black";
    wrapper.style.backgroundColor = "white";
    wrapper.style.color = "black";
    header.style.backgroundColor = "black";
    brake.style.backgroundColor = "white";
    footer.style.backgroundColor = "black";
  }
  mode_button.textContent = mode_button.value;
});
