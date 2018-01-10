// TODO: mape the objects of Team and Task from locations  and evals to be the same in runs 
// NOTE: is there a better way to handle the consitent Keys of ( 'runs','configs', 'evals', 'location')
var allthings = {
  runs: [],
  configs: [],
  evals: [],
  locations: [],
}

/*
Description: Runs on page to process what page to show
 Also handles loading LocalStorage loading from old content
Parameters: 
Return: 
*/
document.onreadystatechange = () => {
  console.log("onreadystatechange");
  showPage(1);
  if (localStorage.allthings !== undefined) {
    allthings = returnallfromlocalstorage();
    rerenderall();
  }
};

// #TODO: Create a way to illustrate that the back button is not an option
/* 
  Description:
    This is the paging function, has a value of all page ids
    stored in an array and then will show or hide the neccessary 
    elements. This effect will create the Paging effect
  Parameters: Takes the page value of 1,2, ... 6 
  Returns: Nothing
*/
function showPage(page) {
  const pages = ['home', 'evaluationPage', 'evaluationlist',
    'gpsform', 'configurationPage', 'configurationlist'
  ];
  let i = 0;
  for (i; i < pages.length; i += 1) {
    if (page === i + 1) {
      document.getElementById(pages[i]).style.display = 'block';
      location.hash = `${pages[i]}`;
    } else {
      document.getElementById(pages[i]).style.display = 'none';
    }
  }
}

/*s
Description: 
Parameters: 
Return: 
*/
// DEBUG: the onhash change event dosent get called on the url changing but gets called only on page refresh/reload
setTimeout(hashCheck(window.location.hash), 100);

function hashCheck(hash) {
  console.log("running func");
  if (hash != window.location.hash) {
    console.log("triggered onhaschange: " + window.location.href + " and " + window.location.hash);
  }
}
/* 
Description:
  Iterate the elements of a form ID 
  (don't give the hash in front),
  and return as a key-value object where 
  key is name and value is ... value ... 
  from each form element.
Parameters: one of 'runs', 'configs', 'evals', 'locations'
Returns: the key:value object (like {team:"NERVE", task:"1-1A-1"} )
*/
function getObjectFromForm(idname) {
  var x = document.getElementById(idname);
  var e = x.elements;
  var kvobject = {};
  for (var i = 0; i < e.length; i++) {
    if (e[i].tagName == "BUTTON" || e[i].type == "submit") continue;
    console.log(`${e[i].name} : ${e[i].value} from ${e[i]}`);
    kvobject[e[i].name] = e[i].value;
  }
  return kvobject;
}

/* 
Description:
  Save a form to the master storage object (global).
  Saves to localstorage
  Then removes all elements and shows all elements in Array 
Parameters: one of 'runs', 'configs', 'evals', 'locations'
Returns: nothing
*/
function saveToArray(thingtosave) {
  var nameformidmap = {
    'runs': 'runform',
    'evals': 'evaluationForm',
    'configs': 'configurationForm',
  } //TODO add to here for locations
  event.preventDefault();
  console.log(thingtosave);
  var o = getObjectFromForm(nameformidmap[thingtosave]);
  allthings[thingtosave].push(o);
  savealltolocalstorage();
  rerenderall();
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
  var x = allthings[thingtype].splice(idx, 1);
  rerenderall(); //TODO - make this better?
  savealltolocalstorage();
  return x;
}

/*
Description: Function for master rerender
Parameters: 
Return: 
*/
function rerenderall() {
  rerenderElements('runs');
}

/*
Description: saves global array to localStorage 
Parameters: 
Return: 
*/
function savealltolocalstorage() {
  localStorage.setItem("allthings", JSON.stringify(allthings));
}

/*
Description: loads the allthings localStorage object to the allthings gloabl objects
Parameters: 
Return: 
*/
function returnallfromlocalstorage() {
  return JSON.parse(localStorage.getItem("allthings"));
}

/*
Description:  rerenders the specific elements by key value 
Parameters:  a key value of ( 'runs', 'configs', 'evals', 'locations' )
Return: 
*/
// REVIEW: there must be a better way to solve this then the IFs
function rerenderElements(kv) {
  var nameformidmap = {
    'runs': 'runlist',
    'evals': 'evaluationlist',
    'configs': 'configurationlist',
  } 
  var list = document.getElementById(nameformidmap[kv]);
  list.innerHTML = "";
  if(kv === 'runs'){
    createRunElements();
  } else if( kv == 'configs'){
    createConfigElements();
  }else if( kv == 'evals'){
    createEvalElements()
  }else if( kv == 'locations'){
    createLocationElements()
  }
}

/*
Description: 
Parameters: 
Return: 
*/
// TODO: Create a function to create all configs, evals, and locations
function createRunElements() {
  var runList = document.getElementById('runlist');
  for (x = 0; x < allthings.runs.length; x += 1) {
    let teamValue = allthings.runs[x].team;
    let taskValue = allthings.runs[x].task;
    var template = `
    <!--- Start of a single Run -->
    <div id='run${x}' class=" ui five column grid  segment">
      <div class="stretched row">
          <div class="column">
              <div id='team' class="ui  ">${teamValue}</div>
          </div>
          <div class="column">
              <div id='task' class="ui ">${taskValue}</div>
          </div>
          <div class="column">
              <button class="ui blue button" onclick="showPage(4)">GPS</button>
          </div>
          <div class="column">
              <button class="ui blue button" onclick="showPage(2)">Edit</button>
          </div>
          <div class="column">
            <button class="ui blue button" onclick="deleteElementFromAllThings('runs',${x})">Delete</button>
          </div>
      </div>
    </div>
    <!-- End of a single Run -->
    `;
    if (x === 0) {
      runList.innerHTML = template;
    } else if (x !== null || x > 0) {
      document.getElementById(`run${x - 1}`).insertAdjacentHTML('afterend', template);
    }
  }
}

function createConfigElements (){
  var configurationlist = document.getElementById('configurationlist');
  for (x = 0; x < allthings.configs.length; x += 1) {
    let teamValue = allthings.configs[x].team;
    let nameValue = allthings.configs[x].name;
    let rotorsValue = allthings.configs[x].rotors;
    let batteryValue = allthings.configs[x].battery;
    let flightControllerValue = allthings.configs[x].flightController;
    let heightValue = allthings.configs[x].height;
    let weightValue = allthings.configs[x].weight;
    let notesValue = allthings.configs[x].notes;
    var template = `
  
    `;
    if (x === 0) {
      configurationlist.innerHTML = template;
    } else if (x !== null || x > 0) {
      document.getElementById(`configs${x - 1}`).insertAdjacentHTML('afterend', template);
    }
  }

}

function createEvalElements (){
  var evlauationlist = document.getElementById('evaluationlist');
  for (x = 0; x < allthings.configs.length; x += 1) {
    let teamValue = allthings.configs[x].team;
    let taskValue = allthings.configs[x].task;
    let resultValue = allthings.configs[x].result;
    let percentValue = allthings.configs[x].percent;
    let flightControllerValue = allthings.configs[x].flightController;
    let configValue = allthings.configs[x].config;
    let timeValue = allthings.configs[x].time;
    let goaltimeValue = allthings.configs[x].goaltime;
    let notesValue = allthings.configs[x].notes;
    var template = `
  
    `;
    if (x === 0) {
      evaluationlist.innerHTML = template;
    } else if (x !== null || x > 0) {
      document.getElementById(`evals${x - 1}`).insertAdjacentHTML('afterend', template);
    }
  }
  
}
function createConfigElements (){
  
}