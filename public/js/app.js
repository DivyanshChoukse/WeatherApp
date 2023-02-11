const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.getElementById("message-1");
const messageTwo = document.getElementById("message-2");

weatherForm.addEventListener("submit", (e) => {
  messageOne.innerText = "Loading...";
  messageTwo.innerText = "";
  e.preventDefault();
  const location = search.value;
  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.innerText = data.error;
        } else {
          messageOne.innerText = data.location;
          messageTwo.innerText = data.forecast;
        }
      });
    }
  );
});
