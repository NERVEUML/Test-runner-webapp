var allthings = {
  runs: [],
  configs: [],
  evals: [],
  locations: [],
}


let INDEX = 0;

// Runs on page to process what page to show
// Also handles loading LocalStorage loading from old content
document.onreadystatechange = () => {
  console.log("onreadystatechange");
  showPage(1);
  if( localStorage.allthings !== undefined ){
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
    } else {
      document.getElementById(pages[i]).style.display = 'none';
    }
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
function getObjectFromForm( idname ){
  var x = document.getElementById( idname );
  var e = x.elements;
  var kvobject = {};
  for( var i = 0; i < e.length; i ++ ){
    if( e[i].tagName == "BUTTON" || e[i].type == "submit") continue;
    console.log(`${e[i].name} : ${e[i].value} from ${e[i]}`);
    kvobject[ e[i].name ] = e[i].value;
  }
  return kvobject;
}


/* 
Description:
  Save a form to the master storage object (global).
Parameters: one of 'runs', 'configs', 'evals', 'locations'
Returns: nothing
*/
function saveToArray(thingtosave){
  var nameformidmap = {
    'runs':'runform',
    'evals':'evaluationForm',
    'configs':'configurationForm',
  } //TODO add to here for locations
  event.preventDefault();
  console.log(thingtosave);
  var o = getObjectFromForm( nameformidmap[thingtosave] );
  allthings[thingtosave].push(o);
  savealltolocalstorage();
  rerenderall();
}
/*
Description:
  removeElementFromAllThings

Parameters:
  index to delete
  thingtype is one of 'runs', 'configs', 'evals', 'locations'
returns: thing removed
*/
function deleteElementFromAllThings(thingtype, idx){
  var x= allthings[thingtype].splice(idx,1);
  rerenderall(); //TODO - make this better?
  savealltolocalstorage();
  return x;
}
function rerenderall(){
  rerenderRunElements();
}

function savealltolocalstorage(){
  localStorage.setItem("allthings", JSON.stringify(allthings));
}
function returnallfromlocalstorage(){
  return JSON.parse( localStorage.getItem("allthings"));
}

function rerenderRunElements(){
  var runList = document.getElementById('runlist');
  runList.innerHTML = "";
  createRunElements();
}


function createRunElements() {
  var runList = document.getElementById('runlist');
  for (x = 0; x < allthings.runs.length; x += 1) {
    let teamValue = allthings.runs[x].team;
    let taskValue = allthings.runs[x].task;
    console.log(teamValue);
    console.log(taskValue);
    var template = `
    <!--- Start of a single Run -->
    <div id='run${x}' class=" ui four column grid  segment">
      <div class="stretched row">
          <div class="column">
              <div id='team' class="ui ">${teamValue}</div>
          </div>
          <div class="column">
              <div id='task' class="ui ">${taskValue}</div>
          </div>
          <div class="column">
              <button onclick="showPage(4)">GPS</button>
          </div>
          <div class="column">
              <button onclick="showPage(2)">Edit </button>
          </div>
          <div class="column">
            <button onclick="deleteElementFromAllThings('runs',${x})">Delete </button>
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