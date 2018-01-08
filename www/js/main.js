let validRuns = [];
let validConfigs = [];
let validEvals = [];
let validlocations = [];

let INDEX = 0;



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
    takes all form values and saves to an object
  Parameters: None
  Returns: the created object
*/
function storeRuns() {
  let runForm = document.getElementById('runform');
  let tempTeam = runForm.team.value;
  let tempTask = runForm.task.value;
  let run = {
    team: tempTeam,
    task: tempTask,
  };
  console.log(run);
  return run;
}
/* 
  Description:
    takes all form values and saves to an object
  Parameters: None
  Returns: the created object
*/
function storeEvals() {
  let evaluationForm = document.getElementById('evaluationForm');
  let tempTeam = evaluationForm.team.value;
  let tempTask = evaluationForm.task.value;
  let tempResult = evaluationForm.result.value;
  let tempPercent = evaluationForm.percent.value;
  let tempConfig = evaluationForm.config.value;
  //let tempTime = evaluationForm.time.value;
  //let tempGoalTime = evaluationForm.goalTime.value;
  let tempNotes = evaluationForm.notes.value;
  let eval = {
    team: tempTeam,
    task: tempTask,
    result: tempResult,
    percent: tempPercent,
    config: tempConfig,
    //time: tempTime,
    //goalTime: tempGoalTime,
    notes: tempNotes,

  };
  console.log(eval);
  return eval;
}

function gibObjectFromForm( idname ){
  var x = document.getElementById( idname );
  var e = x.elements;
  var kvobject = {};
  for( var i = 0; i < e.length; i ++ ){
    kvobject[ e[i].name ] = e[i].value;
  }
  return kvobject;
}
/* 
  Description:
    takes all form values and saves to an object
  Parameters: None
  Returns: the created object
*/
function storeConfigs() {
  let configurationForm = document.getElementById('configurationForm');
  let tempTeam = configurationForm.team.value;
  let tempName = configurationForm.name.value;
  let tempairFrame = configurationForm.airFrame.value;
  let tempRotors = configurationForm.rotors.value;
  let tempBattery = configurationForm.battery.value;
  let tempflightController = configurationForm.flightController.value;
  let tempHeight = configurationForm.height.value;
  let tempNotes = configurationForm.notes.value;
  let config = {
    team: tempTeam,
    name: tempName,
    airFrame: tempairFrame,
    rotors: tempRotors,
    battery: tempBattery,
    flightController: tempflightController,
    height: tempHeight,
    notes: tempNotes,

  };
  console.log(config);
  return config;
}

/* 
Description:
  function that takes in object and adds 
  to the end and array.
Parameters: the Object Select Method:
          Object Select -> Will decdie what fucntion to call and grab the neccessary
          Form Values.
          objSelect Should values: runs, configs,evals
Returns: that Array 
*/
function saveToArray(e,objSelect){
  event.preventDefault(e);
  if(objSelect === 'runs'){
    let tempObj = storeRuns(objSelect);
    let tempArray = validRuns;
  }else if( objSelect === 'configs'){
    let tempObj = storeConfigs(objSelect);
    let tempArray = validConfigs;
  }else if( objSelect === 'evals'){
    let tempObj = storeEvals(objSelect);
    let tempArray = validEvals;
  }

  console.log(' trying to test array type:' + Array.isArray(tempArray));
  console.log(tempObj);
  tempArray.push(tempObj);
  console.log(tempArray);
  return tempArray;

}



const runList = document.getElementById('runlist');

function createRunElements() {
  //loads global array to save to temp 
  console.log(validRuns);
  for (x = 0; x < validRuns.length; x += 1) {
    let teamValue = validRuns[x].team;
    let taskValue = validRuns[x].task;
    console.log(teamValue);
    console.log(taskValue);
    if (x === 0) {
      runList.innerHTML = `
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
    } else if (x !== null || x > 0) {
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


// function compareArrays(arr1, arr2) {
//   console.log('arr1: ' + typeof (arr1) + ' arr2: ' + typeof (arr2));
//   if (arr1.length !== arr2.length)
//     return false;
//   for (var i = arr1.length; i--;) {
//     if (arr1[i] !== arr2[i])
//       return false;
//   }

//   return true;
// }


// function save() {
//   if (!(compareArrays(validRuns, localStorage.getItem('runs')))) {
//     localStorage.setItem('runs', JSON.stringify(validRuns));
//     console.log('save succesful to Local Storage');
//   } else {
//     console.log('nothing to save')
//   }
//   if (!(compareArrays(validConfigs, localStorage.getItem('configs')))) {
//     localStorage.setItem('configs', JSON.stringify(validConfigs));
//     console.log('save succesful to Local Storage');
//   } else {
//     console.log('nothing to save')
//   }
//   if (!(compareArrays(evals, localStorage.getItem('evals')))) {
//     localStorage.setItem('evals', JSON.stringify(evals));
//     console.log('save succesful to Local Storage');
//   } else {
//     console.log('nothing to save')
//   }
//   if (!(compareArrays(validlocations, localStorage.getItem('locations')))) {
//     localStorage.setItem('locations', JSON.stringify(validlocations));
//     console.log('save succesful to Local Storage');
//   } else {
//     console.log('nothing to save')
//   }
// }

// function resetDev() {
//   localStorage.clear();
//   INDEX = 0;
//   validRuns = [];
// }

// setInterval(save, 20000);