// NOTE: is there a better way to handle the consitent Keys of ( 'runs','configs', 'evals', 'location')
// BRAIN BLAST: if i can export shouldn't I be allowed to import, like configs each day ?
// TODO: EXPORT file for GPS, Evals.
// TODO: Import file for Configs
// TODO: create a Trash bin for chance of recovery in the all things object so all delete objects go there
let allthings = {
  runs: [],
  configs: [],
  evals: [],
  locations: []
};
// Description: handles loading of Local Storage and rendering on any created sub components
document.onreadystatechange = () => {
  console.log("Step 0");
  showPage("home");
  console.log(location);
  if (localStorage.allthings !== undefined) {
    allthings = returnallfromlocalstorage();
    rerenderall();
  }
};
// Description: Shows only neccesary components based on page value given
function showPage(page) {
  const pages = [
    "home",
    "evaluationPage",
    "elist",
    "gpsPage",
    "configurationPage"
  ];
  let i = 0;
  for (i; i < pages.length; i += 1) {
    if (page === pages[i]) {
      document.getElementById(pages[i]).style.display = "block";
      location.hash = `${pages[i]}`;
    } else {
      document.getElementById(pages[i]).style.display = "none";
    }
  }
}
//  Description: Allows the back button to work as it would on a normal multi-page website
window.addEventListener("hashchange", function() {
  console.log(window.location.hash);
  let myHash = window.location.hash;
  showPage(myHash.substring(1));
});
/*
   Description:
   Save a form to the master storage object (global).
   Saves to localstorage
   Then removes all elements and shows all elements in Array
   Parameters: one of 'runs', 'configs', 'evals', 'locations'
   Returns: nothing
   */
function saveToArray(thingtosave) {
  console.log("Step 1");
  let o = getObjectFromForm(nameformidmap[thingtosave]);
  allthings[thingtosave].push(o);
  savealltolocalstorage();
  rerenderall();
  return o;
}

function clearNonEssential() {
  document.getElementById("evalFormNotes").value = " ";
  document.getElementById("eStart").value = "---";
  document.getElementById("eEnd").value = "---";
  document.getElementById("evalSuccessForm").value = "0";
  document.getElementById("evalResultForm").value = "Return_To_Start";
  document.getElementById("eUTC").value = "---";
}

//grab form to object
//save create object to variable
//load form back with previous save object
//increment Attempt Number
function incrementSaveAttempt(eval) {
  let keyobject = saveToArray(eval);
  let form = document.getElementById("evaluationForm");
  let elements = form.elements;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].tagName == "BUTTON" || elements[i].type == "submit")
      continue;
    elements[i].value = keyobject[elements[i].name];
  }
  let oldAttemptField = document.getElementById("evalAttempt");
  let attemptValue = parseInt(oldAttemptField.value);
  let newAttemptValue = attemptValue + 1;
  oldAttemptField.value = newAttemptValue.toString();
}
//Takes in the allthings.evalutions object
function handleCSV(keyValue) {
  let myCSV = ConvertToCSV(keyValue);
  console.log(myCSV);
  saveFile("my.csv", myCSV);
}
/*
   Description:
   Iterate the elements of a form ID
   (don't give the hash in front),eva
   and return as a key-value object where
   key is name and value is ... value ...
   from each form element.
   Parameters: one of 'runs', 'configs', 'evals', 'locations'
   Returns: the key:value object (like {team:"NERVE", task:"1-1A-1"} )
   */

function getObjectFromForm(idname) {
  let x = document.getElementById(idname);
  let e = x.elements;
  let kvobject = {};
  for (let i = 0; i < e.length; i++) {
    if (e[i].tagName == "BUTTON" || e[i].type == "submit") continue;
    kvobject[e[i].name] = e[i].value;
    console.log(e[i]);
    e[i].value = "";
  }
  console.log("Step 2");
  return kvobject;
}
/*
   Description: takes in a form and
   Parameters: thingtype -> which can 'runs', 'locations' , 'configs', 'evals'
   index -> is used to determine which element to be picked from the above array
   Return: object that is being edited
   */

// TODO: Seperate this into two functions load form from object
// and then edit object which deletes and loads to correct page
// AKA rewrite when you have time
function loadFormFromObject(index, thingtype, page) {
  showPage(page);
  let array = allthings[thingtype];
  let keyobject = array[index];
  let form = document.getElementById(nameformidmap[thingtype]);
  let elements = form.elements;
  let editedObject = {};
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].tagName == "BUTTON" || elements[i].type == "submit")
      continue;
    console.log(
      `Form elements value: ${elements[i].value} and allthings object ${
        keyobject[elements[i].name]
      }`
    );
    elements[i].value = keyobject[elements[i].name];
    editedObject[elements[i].name] = elements[i].value;
  }
  deleteElementFromAllThings(thingtype, index);
  return editedObject;
}
/*
   Description: saves global array to localStorage
   Parameters:
   Return:
   */
function savealltolocalstorage() {
  console.log("Step 3");
  localStorage.setItem("allthings", JSON.stringify(allthings));
}
/*
   Description: Function for master rerender
   Parameters:
   Return:
   */
function rerenderall() {
  console.log("Step 4");
  rerenderElements("runs");
  rerenderElements("configs");
  rerenderElements("evals");
  rerenderElements("locations");
}
/*
   Description:  rerenders the specific elements by key value
   Parameters:  a key value of ( 'runs', 'configs', 'evals', 'locations' )
   Return:
   */
function rerenderElements(kv) {
  let list = document.getElementById(namelistidmap[kv]);
  list.innerHTML = "";
  if (kv === "runs") {
    console.log("Step 4.runs");
    createRunElements();
  } else if (kv == "configs") {
    console.log("Step 4.configs");
    createConfigElements();
  } else if (kv == "evals") {
    console.log("Step 4.evals");
    createEvalElements();
  } else if (kv == "locations") {
    console.log("Step 4.locations");
    createLocationElements();
  }
}
/*
   Description: loads the allthings localStorage object to the allthings gloabl objects
   Parameters:
   Return:
   */
function returnallfromlocalstorage() {
  console.log("Step 5");
  return JSON.parse(localStorage.getItem("allthings"));
}
/*
   Description:
   removeElementFromAllThings -> delete one element from the thingtype array and re-saves to localStorage
   Parameters:
   index to delete
   thingtype is one of 'runs', 'configs', 'evals', 'locations'
   returns: thing removed
   */
function deleteElementFromAllThings(thingtype, idx) {
  console.log(`Step 6.delete.${thingtype}`);
  let x = allthings[thingtype].splice(idx, 1);
  rerenderall(); // TODO: make this better?
  savealltolocalstorage();
  return x;
}
/*
   Description: Grabs the team and task from the run element and auto fills it in the form
   Parameters:
   Return:
   */
function teamTaskRetriever(option, keyNum, page) {
  let runs = allthings.runs;
  if (option === "eval") {
    document.getElementById("evalTeam").value = runs[keyNum].team;
    document.getElementById("evalTask").value = runs[keyNum].task;
  } else if (option === "gps") {
    document.getElementById("gpsTeam").value = runs[keyNum].team;
    document.getElementById("gpsTask").value = runs[keyNum].task;
  }
  showPage(page);
}
/*
   Description:  loops through the config list and productions the drop down menu to have options
   Parameters:
   Return:
   */
function loadConfigs() {
  if (allthings.configs !== null) {
    for (let i = 0; i < allthings.configs.length; i++) {
      let opt = `Team:${allthings.configs[i].team} Name:${
        allthings.configs[i].name
      }`;
      var el = document.createElement("option");
      el.name = opt;
      el.textContent = opt;
      el.value = opt;
      document.getElementById("selectConfig").appendChild(el);
    }
  }
}
