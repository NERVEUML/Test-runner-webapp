let validRuns = [];
let validConfigs = [];
let evals = [];

let INDEX = 0;

// This takes all pages by IDs and show and hides them based on what page 
// should be displayed
function showPage(page) {
  const pages = ['home', 'evaluationform', 'evaluationlist', 'gpsform', 'configurationform', 'configurationlist'];
  let i = 0;
  for (i; i < pages.length; i += 1) {
    if (page === i + 1) {
      document.getElementById(pages[i]).style.display = 'block';
    } else {
      document.getElementById(pages[i]).style.display = 'none';
    }
  }
}

// Runs on page to process what page to show
// Also handles loading LocalStorage loading from old content
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    showPage(1);
    const tempIndex = localStorage.getItem('index');
    if (tempIndex !== 0 || tempIndex !== INDEX) {
      INDEX = tempIndex;
    }
    const tempRuns = localStorage.getItem('runs');
    if (validRuns != null || validRuns !== tempRuns) {
      validRuns = tempRuns;
    }
  }
};

// fucntion is trigger by and onclick fucntion of submit button
// function gets values from form by taking them by name.value
// Then the fucntion takes the the GLOBAL var INDEX and sets the new
// element to save to that index and then increments INDEX
function addTEAM(e) {
  event.preventDefault(e);
  let tempTeam = document.getElementById('runform').team.value;
  let tempTask = document.getElementById('runform').task.value;
  validRuns[INDEX] = {
    team: tempTeam,
    task: tempTask,
  };
  INDEX += 1;
}

// makes life easier when trying to crete elements with lots of nested items
function createElementExtended(type, _divname, parentDiv, _className, _id) {
  let temp = document.createElement(type);
  _divname.className = _className;
  _divname.id = _id;
  parentDiv.appendChild(_divname);
}

// TODO: Solve issue with adding new element using unique ID's



// TODO: need to create a function that loads all possible run from LS
// TODO: need a function that creates a new element based on run Markup 
const runList = document.getElementById('runlist');
function createRunElements() {
  //loads global array to save to temp 
  console.log(validRuns);
  for (x= 0; x< validRuns.length;x += 1){
     let teamValue =validRuns[x].team;
     let taskValue =validRuns[x].task;
     console.log(teamValue);
     console.log(taskValue);
     
    runList.innerHTML =  `
    <div id='run' class=" ui four column grid  segment">
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
    
      </div>
    </div>
    `;
  }
}

// Function used to save the arrays every sssso often in this case
// the function is being call every 2 seconds for dev purposes
function save() {
  try {
    localStorage.setItem('runs', JSON.stringify(validRuns));
    localStorage.setItem('configs', JSON.stringify(validConfigs));
    localStorage.setItem('evals', JSON.stringify(evals));
    localStorage.setItem('index', INDEX);
    console.log('save success full');
  }  catch(e){
        console.log(`Error: ${e}`);
    }
}
function resetDev(){
  localStorage.clear();
  INDEX=0;
  validRuns= [];
}

setInterval(save, 2000);