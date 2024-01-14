const button = document.querySelector(".menu__button");
const number = document.querySelector(".menu__number");
const notifications = document.querySelectorAll(".notification");
const circleDots = document.querySelectorAll("span.unread");

button.addEventListener("click", () => {
  notifications.forEach((notification) => {
    notification.classList.add("notification--read");
  });
  circleDots.forEach((circleDot) => {
    circleDot.remove();
  });
  number.innerHTML = "0";
});
