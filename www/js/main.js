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

// fucntion addTeam() is trigger by and onclick fucntion of submit button
// function gets values from form by taking them by name.value
// Then the fucntion takes the the GLOBAL var INDEX and sets the new
// element to save to that index and then increments INDEX
//Intiates a save to local storage 
// Triggers the 
function addTEAM(e) {
  event.preventDefault(e);
  let runForm = document.getElementById('runform');
  let tempTeam = runForm.team.value;
  let tempTask = runForm.task.value;
  validRuns[INDEX] = {
    team: tempTeam,
    task: tempTask,
  };
  save();
  INDEX += 1;
  createRunElements();
  runform.team.value = '';
  runform.task.value = '';
}

const runList = document.getElementById('runlist');
function createRunElements() {
  //loads global array to save to temp 
  console.log(validRuns);
  for (x= 0; x< validRuns.length;x += 1){
     let teamValue =validRuns[x].team;
     let taskValue =validRuns[x].task;
     console.log(teamValue);
     console.log(taskValue);
    if(x === 0){
      runList.innerHTML =  `
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
        </div>
      </div>
      `;
    } else if( x!== null || x > 0){
      document.getElementById(`run${x - 1}`).insertAdjacentHTML('afterend', `
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
        </div>
      </div>
      `);
    }
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

setInterval(save, 20000);