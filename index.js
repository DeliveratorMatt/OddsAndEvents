// ===State===

const bank = [10, 11, 12, 13, 14, 15];
const odds = [27, 31, 47];
const evens = [22, 92];

function addToBank(n) {
  if (typeof n !== "number") return;
  bank.push(n);
  render();
}

function sortNumFromBank() {
  if (bank.length === 0) return;
  const n = bank.shift();
  if (n % 2 === 0) {
    evens.push(n);
  } else {
    odds.push(n);
  }
  render();
}

// ===Components===
function EnterNumbers() {
  const $form = document.createElement("form");

  $form.innerHTML = `
    <label>Enter a number to be added to the bank:
    <input name="number" type="number" />
    </label>
    <button id="add" type="button">Add Number</button>
    <button id="sort1">Sort One Number</button>
    <button id="sortAll">Sort All Numbers</button>
    `;

  const $add = $form.querySelector("#add");
  $add.addEventListener("click", () => {
    const data = new FormData($form);
    const number = data.get("number");
    addToBank(Number(number));
  });

  const $sort1 = $form.querySelector("#sort1");
  $sort1.addEventListener("click", sortNumFromBank);

  const $sortAll = $form.querySelector("#sortAll");

  $sortAll.addEventListener("click", () => {
    while (bank.length > 0) {
      sortNumFromBank();
    }
  });

  return $form;
}

function Numbers(numbers) {
  const $numbers = document.createElement("p");
  $numbers.classList.add("numbers");
  const $numberSpans = [];
  for (const number of numbers) {
    const $number = document.createElement("span");
    $number.textContent = number;
    $numberSpans.push($number);
  }

  $numbers.replaceChildren(...$numberSpans);

  return $numbers;
}

//function NumberList

// ===Render===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Odds and Events</h1>
  <EnterNumbers></EnterNumbers>
  `;

  $app.querySelector("EnterNumbers").replaceWith(EnterNumbers());
}

render();
