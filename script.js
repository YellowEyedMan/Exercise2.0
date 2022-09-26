// -- BUILD PAGE --

// -- FILTER
let showBuild = function () {
  let div = document.getElementById("build-page");
  if (div.style.display === "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
  let otherDivs = [
    document.getElementById("home-page"),
    document.getElementById("train-page"),
  ];

  for (let i = 0; i < 2; i++) {
    otherDivs[i].style.display = "none";
  }
};

let showChest = function () {
  const chestBox = document.querySelector("#checkboxF1");

  if (chestBox.checked === true) {
    document.getElementById("chest-BENCH-PRESS").style.display = "flex";

    document.getElementById("chest-CHEST-FLIES").style.display = "flex";
  } else {
    document.getElementById("chest-BENCH-PRESS").style.display = "none";

    document.getElementById("chest-CHEST-FLIES").style.display = "none";
  }
};

let showBiceps = function () {
  const bicepsBox = document.querySelector("#checkboxF2");

  if (bicepsBox.checked === true) {
    document.getElementById("biceps-CURLS").style.display = "flex";

    document.getElementById("biceps-CHIN-UPS").style.display = "flex";
  } else {
    document.getElementById("biceps-CURLS").style.display = "none";

    document.getElementById("biceps-CHIN-UPS").style.display = "none";
  }
};

let showAbs = function () {
  const absBox = document.querySelector("#checkboxF3");
  if (absBox.checked === true) {
    document.getElementById("abs-CRUNCH").style.display = "flex";

    document.getElementById("abs-SIT-UP").style.display = "flex";
  } else {
    document.getElementById("abs-CRUNCH").style.display = "none";

    document.getElementById("abs-SIT-UP").style.display = "none";
  }
};

let showShoulders = function () {
  const shoulderBox = document.querySelector("#checkboxF4");

  if (shoulderBox.checked === true) {
    document.getElementById("shoulders-MILITARY-PRESS").style.display = "flex";

    document.getElementById("shoulders-SHOULDER-FLIES").style.display = "flex";
  } else {
    document.getElementById("shoulders-MILITARY-PRESS").style.display = "none";

    document.getElementById("shoulders-SHOULDER-FLIES").style.display = "none";
  }
};

let showTriceps = function () {
  const tricepBox = document.querySelector("#checkboxF5");

  if (tricepBox.checked === true) {
    document.getElementById("triceps-MILITARY-PUSH-UPS").style.display = "flex";

    document.getElementById("triceps-TRICEP-EXTENSIONS").style.display = "flex";
  } else {
    document.getElementById("triceps-MILITARY-PUSH-UPS").style.display = "none";

    document.getElementById("triceps-TRICEP-EXTENSIONS").style.display = "none";
  }
};

let showQuads = function () {
  const quadBox = document.querySelector("#checkboxF6");

  if (quadBox.checked === true) {
    document.getElementById("quads-BACK-SQUAT").style.display = "flex";

    document.getElementById("quads-BULGARIAN-SPLIT-SQUATS").style.display =
      "flex";
  } else {
    document.getElementById("quads-BACK-SQUAT").style.display = "none";

    document.getElementById("quads-BULGARIAN-SPLIT-SQUATS").style.display =
      "none";
  }
};

let showHamstrings = function () {
  const hamstringBox = document.querySelector("#checkboxF7");

  if (hamstringBox.checked === true) {
    document.getElementById("hamstrings-HAMSTRING-CURLS").style.display =
      "flex";

    document.getElementById("hamstrings-ROMANIAN-DEADLIFTS").style.display =
      "flex";
  } else {
    document.getElementById("hamstrings-HAMSTRING-CURLS").style.display =
      "none";

    document.getElementById("hamstrings-ROMANIAN-DEADLIFTS").style.display =
      "none";
  }
};

let showCalves = function () {
  const calvesBox = document.querySelector("#checkboxF8");

  if (calvesBox.checked === true) {
    document.getElementById("calves-CALVE-RAISES").style.display = "flex";

    document.getElementById("calves-SEATED-CALVE-RAISES").style.display =
      "flex";
  } else {
    document.getElementById("calves-CALVE-RAISES").style.display = "none";

    document.getElementById("calves-SEATED-CALVE-RAISES").style.display =
      "none";
  }
};

// -- MUSCLE GROUPS

// CHEST
let selectedChest1 = function () {
  let workout = document.getElementById("bench-press-title").innerHTML;
  const chestBox = document.querySelector("#checkboxW5");

  if (chestBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};
let selectedChest2 = function () {
  let workout = document.getElementById("chest-flies-title").innerHTML;
  const crunchBox = document.querySelector("#checkboxW6");

  if (crunchBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};

// BICEPS
let selectedBiceps1 = function () {
  let workout = document.getElementById("curls-title").innerHTML;
  const bicepsBox = document.querySelector("#checkboxW3");

  if (bicepsBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};

let selectedBiceps2 = function () {
  let workout = document.getElementById("chin-ups-title").innerHTML;
  const crunchBox = document.querySelector("#checkboxW4");

  if (crunchBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};

// ABS
let selectedAbs1 = function () {
  let workout = document.getElementById("sit-up-title").innerHTML;
  const absBox = document.querySelector("#checkboxW1");

  if (absBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};

let selectedAbs2 = function () {
  let workout = document.getElementById("crunch-title").innerHTML;
  const crunchBox = document.querySelector("#checkboxW2");

  if (crunchBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};
// SHOULDERS
let selectedShoulders1 = function () {
  let workout = document.getElementById("military-press-title").innerHTML;
  const shouldersBox = document.querySelector("#checkboxW7");

  if (shouldersBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};

let selectedShoulders2 = function () {
  let workout = document.getElementById("shoulder-flies-title").innerHTML;
  const crunchBox = document.querySelector("#checkboxW8");

  if (crunchBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};
// TRICEPS
let selectedTriceps1 = function () {
  let workout = document.getElementById("military-push-ups-title").innerHTML;
  const tricepsBox = document.querySelector("#checkboxW9");

  if (tricepsBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};

let selectedTriceps2 = function () {
  let workout = document.getElementById("tricep-extensions-title").innerHTML;
  const crunchBox = document.querySelector("#checkboxW10");

  if (crunchBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};
// QUADRICEPS
let selectedQuads1 = function () {
  let workout = document.getElementById("back-squat-title").innerHTML;
  const quadsBox = document.querySelector("#checkboxW11");

  if (quadsBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};

let selectedQuads2 = function () {
  let workout = document.getElementById(
    "bulgarian-split-squat-title"
  ).innerHTML;
  const crunchBox = document.querySelector("#checkboxW12");

  if (crunchBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};
// HAMSTRINGS
let selectedHams1 = function () {
  let workout = document.getElementById("hamstring-curls-title").innerHTML;
  const hamsBox = document.querySelector("#checkboxW13");

  if (hamsBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};

let selectedHams2 = function () {
  let workout = document.getElementById("romanian-deadlift-title").innerHTML;
  const crunchBox = document.querySelector("#checkboxW14");

  if (crunchBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};
// CALVES
let selectedCalves1 = function () {
  let workout = document.getElementById("calve-raises-title").innerHTML;
  const calvesBox = document.querySelector("#checkboxW15");

  if (calvesBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};

let selectedCalves2 = function () {
  let workout = document.getElementById("seated-calf-raises-title").innerHTML;
  const crunchBox = document.querySelector("#checkboxW16");

  if (crunchBox.checked === true) {
    cartArr.push(workout);
    cart.innerHTML = cartArr;
    console.log(cartArr);
  } else {
    return "";
  }
};
showBuild();
showBuild();

// CART

let workouts = [
  "Sit-Up",
  "Crunch",
  "Curls",
  "Chin-Ups",
  "Bench Press",
  "Chest-Flies",
  "Military Press",
  "Shoulder-Flies",
  "Military Push-Ups",
  "Tricep Extensions",
  "Back Squat",
  "Bulgarian Split Squats",
  "Hamstring Curls",
  "Seated Calf Raises",
];

let cartArr = [];
let cart = document.getElementById("cart-text");

// -- HOME PAGE --
let showHome = function () {
  let div = document.getElementById("home-page");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

  let otherDivs = [
    document.getElementById("build-page"),
    document.getElementById("train-page"),
  ];

  for (let i = 0; i < 2; i++) {
    otherDivs[i].style.display = "none";
  }
};
// --TRAIN PAGE --
let showTrain = function () {
  let div = document.getElementById("train-page");
  if (div.style.display === "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }

  let otherDivs = [
    document.getElementById("home-page"),
    document.getElementById("build-page"),
  ];

  for (let i = 0; i < 2; i++) {
    otherDivs[i].style.display = "none";
  }
};

// EXPERIMENT
function generateDiv() {
  var dotsNumbers = 1;
  var arrayDiv = new Array();
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("dots-container");

  console.log(containerDiv);

  for (var i = 0; i < dotsNumbers; i++) {
    arrayDiv[i] = document.createElement("div");
    arrayDiv[i].id = "block" + i;
    arrayDiv[i].style.backgroundColor = "white";
    arrayDiv[i].style.border = "0.5rem solid black";
    arrayDiv[i].style.margin = "2rem";

    arrayDiv[i].style.width = "1rem 2rem 1rem 2rem";
    arrayDiv[i].style.height = "4rem";
    arrayDiv[i].className = "block" + i;
    arrayDiv[i].textContent = ".";
    containerDiv.appendChild(arrayDiv[i]);
    document.body.appendChild(containerDiv);
  }
}
