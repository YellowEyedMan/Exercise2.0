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

  window.addEventListener("load", initializeWorkouts);
/****DECLARING ARRAYS TO HOLD WORKOUT DATA **** */
// Adding predefined arrays containing the ids of the different muscle group exercises
  const chestExerciseElementsId = [];
  const bicepExerciseElementsId = [];
  const abExerciseElementsId = [];
  const shoulderExerciseElementsId = [];
  const tricepExerciseElementsId = [];
  const quadExerciseElementsId = [];
  const hamstringsExerciseElementsId = [];
  const calfExerciseElementsId = [];

  let chestExerciseElements = [];
  let bicepExerciseElements = [];
  let abExerciseElements = [];
  let shoulderExerciseElements = [];
  let tricepExerciseElements = [];
  let quadExerciseElements = [];
  let hamstringsExerciseElements = [];
  let calfExerciseElements = [];

  const muscleGroupsMap = new Map();


  function initializeWorkouts() {
      console.log("Initializing");
      /***INITIALIZE WORKOUT ARRAYS */
    // That way, if you add more exercises, you just need to add them to the appropriate array. Then the element will automatically be added when the Id arrays are used to get the elements. 
    chestExerciseElementsId = ["chest-BENCH-PRESS", "chest-CHEST-FLIES"];
    bicepExerciseElementsId = ["biceps-CURLS", "biceps-CHIN-UPS"];
    abExerciseElementsId = ["abs-CRUNCH", "abs-SIT-UP"];
    shoulderExerciseElementsId = ["shoulders-MILITARY-PRESS", "shoulders-SHOULDER-FLIES"];
    tricepExerciseElementsId = ["triceps-MILITARY-PUSH-UPS", "triceps-TRICEP-EXTENSIONS"];
    quadExerciseElementsId = ["quads-BACK-SQUAT", "quads-BULGARIAN-SPLIT-SQUATS"];
    hamstringsExerciseElementsId = ["hamstrings-HAMSTRING-CURLS", "hamstrings-ROMANIAN-DEADLIFTS"];
    calfExerciseElementsId = ["calves-CALVE-RAISES", "calves-SEATED-CALVE-RAISES"];
/*** USED WITH MAP DETERMINATION ****** */
    chestExerciseElements = buildMuscleGroupElementsArray(chestExerciseElementsId);
    bicepExerciseElements = buildMuscleGroupElementsArray(bicepExerciseElementsId);
    abExerciseElements = buildMuscleGroupElementsArray(abExerciseElementsId);
    shoulderExerciseElements = buildMuscleGroupElementsArray(shoulderExerciseElementsId);
    tricepExerciseElements = buildMuscleGroupElementsArray(tricepExerciseElementsId);
    quadExerciseElements = buildMuscleGroupElementsArray(quadExerciseElementsId);
    hamstringsExerciseElements = buildMuscleGroupElementsArray(hamstringsExerciseElementsId);
    calfExerciseElements = buildMuscleGroupElementsArray(calfExerciseElementsId);

    // A key value pair so that we can use the element.name value to determine which muscle group elements need to be displayed.
    // If you ever need to add a new muscle group, we just add it here.
    muscleGroupsMap.set("chest", chestExerciseElements); 
    muscleGroupsMap.set("biceps", bicepExerciseElements); 
    muscleGroupsMap.set("abs", abExerciseElements); 
    muscleGroupsMap.set("shoulders", shoulderExerciseElements); 
    muscleGroupsMap.set("triceps", tricepExerciseElements); 
    muscleGroupsMap.set("quads", quadExerciseElements); 
    muscleGroupsMap.set("hamstrings", hamstringsExerciseElements); 
    muscleGroupsMap.set("calves", calfExerciseElements); 
  }

    // ["biceps", bicepExerciseElements],
    // ["abs", abExerciseElements],
    // ["shoulders", shoulderExerciseElements],
    // ["triceps", tricepExerciseElements],
    // ["quads", quadExerciseElements],
    // ["hamstrings", hamstringsExerciseElements],
    // ["calves", calfExerciseElements]);
  
  // TODO: move initialization to onLoad function
  /****USED WITH CONDITIONAL DETERMINATION */
  // let chestExerciseElements = [];
  // let bicepExerciseElements = [];
  // let abExerciseElements = [];
  // let shoulderExerciseElements = [];
  // let tricepExerciseElements = [];
  // let quadExerciseElements = [];
  // let hamstringsExerciseElements = [];
  // let calfExerciseElements = [];
  
  let handleMuscleGroupClick = function (element) {
    let selectedMuscleGroup = element.name;
    
    // Flag determining if exercises should be shown or hidden
    let newDisplayProperty = element.checked === true ? "flex" : "none";
    
    /********CONDITIONAL LOGIC PATHS *****************/
    // Populate an array containing all the elements from the selected workout
    // let selectedWorkoutElementsArray = getSelectedMuscleGroupElementsArray(selectedMuscleGroup);
    // buildMuscleGroupElementsArray(selectedWorkoutElementsArray);
    // // Pass the array of HTML elements for selected workout, along with what the display property should be.
    // toggleSelectedWorkoutDisplay(selectedWorkoutElementsArray, newDisplayProperty);

    /***MAP LOGIC PATHS */
    /***Using a map(key value pairs) to determine selected muscle group element array so we don't have to have a bunch of conditional statements to determine which one we need******/
    let selectedWorkoutElementsArray = muscleGroupsMap.get(selectedMuscleGroup);

    // Pass the array of HTML elements for selected workout, along with what the display property should be.
    toggleSelectedWorkoutDisplay(selectedWorkoutElementsArray, newDisplayProperty);
  };

  // Create elementIds array, map and document.querySelector on each
  function buildMuscleGroupElementsArray(exerciseElementsIdsArray){
    let exerciseElementsArray = [];
    exerciseElementsIdsArray.forEach(id => exerciseElementsArray.push(document.getElementById(id)));

    return exerciseElementsArray;
     
      /***Could have used for loop instead of for each */
      // for (let i = 0; i < chestExerciseElementsId.length; i++) {
      //   chestExerciseElements.add(document.getElementById(array[i]));
      // }
  }
  
  // Add array for exercises elements on page load or on click
  // Set toggle based on passed element.value
  // var toggle = if element.value === on "flex" else "none" // Check checkbox value
  // if element.name === "chest" toggleChestExercises(exerciseElements, toggle) {exerciseElements.forEach(e => e.style.display = toggle)}// 
  /**Generic Method To Control Show/Hide of Workouts */


  // Yes, I know it's a long name, but it's descriptive.
//   const getSelectedMuscleGroupElementsArray = function (muscleGroup) {
//     if(muscleGroup === "chest") {
//         return chestExerciseElements;
//     }
//     if(muscleGroup === "biceps") {
//         return bicepExerciseElements;
//     }
//     if(muscleGroup === "abs") {
//         return abExerciseElements;
//     }
//     if(muscleGroup === "shoulders") {
//         return shoulderExerciseElements;
//     }
//     if(muscleGroup === "triceps") {
//         return tricepExerciseElements;
//     }
//     if(muscleGroup === "quads") {
//         return quadExerciseElements;
//     }
//     if(muscleGroup === "hamstrings") {
//         return hamstringsExerciseElements;
//     }
//     if(muscleGroup === "calves") {
//         return calfExerciseElements;
//     }
//   }
  
//   const toggleSelectedWorkoutDisplay = function (exerciseElements, newDisplayProperty) {
//     // For each element in the exercise HTML elements, set its display property. Can also be done with a for loop.
//     exerciseElements.forEach(element => element.style.display = newDisplayProperty);
//   }
  
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
  