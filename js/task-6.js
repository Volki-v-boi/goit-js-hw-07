function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const boxes = document.getElementById("boxes");
const createBtn = controls.querySelector("button[data-create]");
const destroyBtn = controls.querySelector("button[data-destroy]");
const input = controls.querySelector("input");

const createBoxes = (amount) => {
  if (amount < 1 || amount > 100) {
    console.log("Please enter amount");
    return;
  }

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

createBtn.addEventListener("click", () => createBoxes(Number(input.value)));
destroyBtn.addEventListener("click", destroyBoxes);
