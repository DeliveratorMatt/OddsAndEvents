// ===State===

const bank = [];
const odds = [];
const evens = [];

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
    <input name="newNumber" type="number" />
    </label>
    <button id="add">Add Number</button>
    <button id="sort1">Sort One Number</button>
    <button id="sortAll">Sort All Numbers</button>
    `;

  const $add = $form.querySelector("#add");
  $add.addEventListener("click", () => {
    const data = new FormData($form);
    const number = data.get("number");
    addToBank(number);
  });

  const $sort1 = $form.querySelector("#sort1");
  $sort1.addEventListener("click", sortNumFromBank);

  const $sortAll = $form.querySelector("#sortAll");

  const bankLen = bank.length;
  $sortAll.addEventListener("click", () => {
    for (let i = 0; i < bankLen; i++) {
      sortNumFromBank();
    }
  });
}

function Numbers(numbers) {
  const $numbers = document.createElement("p");
  $numbers.classList.add("numbers");
  const $numberSpans = numbers.map((number) => {
    const $number = document.createElement("span");
    $number.textContent = number;
    return $number;
  });
}

//function NumberList

// ===Render===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Odds and Events</h1>
  <EnterNumbers></EnterNumbers>
  `;
}
