const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {};

  for (const [name, value] of formData) {
    if (!value) {
      console.log("All form fields must be filled in");
      return;
    }

    data[name] = value.trim();
  }

  console.log(data);
  form.reset();
});
