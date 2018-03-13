// TODO: Create a function to create all configs, evals, and locations
function createRunElements() {
    console.log("Step 4.runs.create");
    let runList = document.getElementById('runlist');
    for (x = 0; x < allthings.runs.length; x += 1) {
        let teamValue = allthings.runs[x].team;
        let taskValue = allthings.runs[x].task;
        let template = `
            <!--- Start of a single Run -->
            <div id="run${x}">
            <div class=" ui three column   centered grid  segment">
            <div class="column">
            <div class="ui blue  large label">
            ${teamValue}
        </div>
            <br />
            <div class="ui  small label">
            Team
            </div>
            </div>
            <div class="column">
            <div class="ui blue  large label">
            ${taskValue}
        </div>
            <br/>
            <div class="ui  small label">
            Task
            </div>

            </div>
            <div class="column">
            <button class="ui teal button" onclick="teamTaskRetriever('gps',${x},'gpsPage')" type="button" >GPS</button>
            <button class="ui purple button" onclick="teamTaskRetriever('eval',${x},'evaluationPage')" type="button" >Evaluate</button>
            </div>
            <div class="column">
            <button class="ui red button" onclick="deleteElementFromAllThings('runs',${x})" type="button">Delete</button>
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

function createConfigElements() {
    console.log("Step 4.configs.create");
    let configlist = document.getElementById('configlist');
    for (x = 0; x < allthings.configs.length; x += 1) {
        let teamValue = allthings.configs[x].team;
        let nameValue = allthings.configs[x].name;
        let rotorsValue = allthings.configs[x].rotors;
        let batteryValue = allthings.configs[x].battery;
        let flightControllerValue = allthings.configs[x].flightController;
        let heightValue = allthings.configs[x].height;
        let weightValue = allthings.configs[x].weight;
        let notesValue = allthings.configs[x].notes;
        let template = `<!--- Start of a single config -->
            <div id="configs${x}">
            <div class="ui five column grid segment">
            <div class="column">
            <div class="ui blue  large label">
            ${teamValue}
        </div>
            <br />
            <div class="ui  small label">
            Team
            </div>
            </div>
            <div class="column">
            <div class="ui blue  large label">
            ${nameValue}
        </div>
            <br/>
            <div class="ui  small label">
            Name
            </div>
            </div>
            <div class="column">
            <div class="ui blue large label">
            ${rotorsValue}
        </div>
            <br/>
            <div class="ui   small label">
            Rotors
            </div>
            </div>
            <div class="column">
            <div class="ui blue large label">
            ${batteryValue}
        </div>
            <br/>
            <div class="ui   small label">
            Battery
            </div>
            </div>
            <div class="column">
            <button class="ui  purple button" onclick="loadFormFromObject(${x},'configs','configurationPage')" type="button">Edit</button>
            </div>
            <div class="column">
            <div class="ui blue large label">
            ${flightControllerValue}
        </div>
            <br/>
            <div class="ui small label">
            Flight Controller
            </div>
            </div>
            <div class="column">
            <div class="ui blue large label">
            ${heightValue}
        </div>
            <br/>
            <div class="ui  label">
            Height
            </div>
            </div>
            <div class="column">
            <div class="ui blue large label">
            ${weightValue}
        </div>
            <br/>
            <div class="ui  label">
            Weight
            </div>
            </div>
            <div class="column">
            <div class="ui blue large label">
            ${notesValue}
        </div>
            <br/>
            <div class="ui  label">
            Notes
            </div>
            </div>

            <div ="column">
            <button class="ui  red button" onclick="deleteElementFromAllThings('configs',${x})" type="button">Delete</button>
            </div>

            </div>
            </div>

            </div>`;
        if (x === 0) {
            configlist.innerHTML = template;
        } else if (x !== null || x > 0) {
            document.getElementById(`configs${x - 1}`).insertAdjacentHTML('afterend', template);
        }
    }
}

function createEvalElements() {
    console.log("Step 4.evals.create");
    let evaluationlist = document.getElementById('evaluationlist');
    for (x = 0; x < allthings.evals.length; x += 1) {
        let aex = allthings.evals[x];
        let teamValue = aex.team;
        let taskValue = aex.task;
        let attemptValue = aex.attempt;
        let resultValue = aex.result;
        let percentValue = aex.percent;
        let flightControllerValue = aex.flightController;
        let configValue = aex.config;
        let timeValue = aex.time;
        let goaltimeValue = aex.goaltime;
        let notesValue = aex.notes;
        let epochStart = aex.eStart;
        let localTime = new Date(parseInt(epochStart));
        let template = `<div id="evals${x}" class="ui">
            <div class=" ui five column grid segment">
            <div class="column">
            <div class="ui blue  large label">
            ${teamValue}
        </div>
            <br />
            <div class="ui  small label">
            Team
            </div>
            </div>
            <div class="column">
            <div class="ui blue  large label">
            ${taskValue}-${attemptValue}
        </div>
            <br/>
            <div class="ui  small label">
            Task
            </div>
            </div>
            <div class="column">
            <div class="ui blue large label">
            ${resultValue}
        </div>
            <br/>
            <div class="ui   small label">
            Result
            </div>
            </div>
            <div class="column">
            <div class="ui blue large label">
            ${percentValue}
        </div>
            <br/>
            <div class="ui small label">
            Success Percent
            </div>
            </div>
            <div class="column">
            <button class="ui  purple button" onclick="loadFormFromObject(${x},'evals','evaluationPage')"  type="button" ">Edit</button>
            </div>
            <div class="column">
            <div class="ui blue large label">
            ${configValue}
        </div>
            <br/>
            <div class="ui  label">
            Config
            </div>
            </div>
            <div class="column">
            <div class="ui blue large label">
            ${timeValue}
        </div>
            <br/>
            <div class="ui  label">
            Total Time
            </div>
            </div>
            <div class="column">
            <div class="ui blue large label">
            ${goaltimeValue}
        </div>
            <br/>
            <div class="ui  label">
            Goal Time
            </div>
            </div>
            <div class="column">
            <div class="ui blue large label">
            ${notesValue}
        </div>
            <br/>
            <div class="ui  label">
            Notes
            </div>
            </div>
            <div class="column">
            <button class="ui  red button" onclick="deleteElementFromAllThings('evals',${x})" type="button">Delete</button>
            </div>
            <div class="bottom blue  attached ui segment">
            Started At: ${localTime}
        </div>
            </div>
            </div>`;
        if (x === 0) {
            evaluationlist.innerHTML = template;
        } else if (x !== null || x > 0) {
            document.getElementById(`evals${x - 1}`).insertAdjacentHTML('afterend', template);
        }
    }
}
//TODO: update function to reflect other create functions
function createLocationElements() {
    console.log("Step 4.locations.create");
    let locationlist = document.getElementById('locationlist');
    for (x = 0; x < allthings.locations.length; x += 1) {
        let teamValue = allthings.locations[x].team;
        let taskValue = allthings.locations[x].task;
        let latValue = allthings.locations[x].latitude;
        let longValue = allthings.locations[x].longitude;
        let template = `<div id="locations${x}" class="ui">
            <div class=" ui five column grid   segment  ">
            <div class="column">
            <div class="ui blue  large label">
            ${teamValue}
        </div>
            <br />
            <div class="ui  small label">
            Team
            </div>
            </div>
            <div class="column">
            <div class="ui blue  large label">
            ${taskValue}
        </div>
            <br/>
            <div class="ui  small label">
            Task
            </div>
            </div>
            <div class="column">
            <div class="ui blue large label">
            ${latValue}
        </div>
            <br/>
            <div class="ui   small label">
            Latitude
            </div>
            </div>
            <div class="column">
            <div class="ui blue large label">
            ${longValue}
        </div>
            <br/>
            <div class="ui small label">
            Longitude
            </div>
            </div>
            <div class="column">
            <button class="ui  red button" onclick="deleteElementFromAllThings('locations',${x})" type="button">Delete</button>
            </div>
            </div>
            </div>
            </div>`;
        if (x === 0) {
            locationslist.innerHTML = template;
        } else if (x !== null || x > 0) {
            document.getElementById(`locations${x - 1}`).insertAdjacentHTML('afterend', template);
        }
    }

}
