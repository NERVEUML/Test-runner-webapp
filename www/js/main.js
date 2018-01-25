// NOTE: is there a better way to handle the consitent Keys of ( 'runs','configs', 'evals', 'location')
// BRAIN BLAST: if i can export shouldn't I be allowed to import, like configs each day ?
// TODO: EXPORT file for GPS, Evals and Configs.
// TODO: Import file for Configs

let allthings = {
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
    console.log("Step 0");
    console.log(location);
    showPage('home');
    console.log(location)
    if (localStorage.allthings !== undefined) {
        allthings = returnallfromlocalstorage();
        loadConfigs();
        rerenderall();
    }
};
/* 
  Description:
    This is the paging function, has a value of all page ids
    stored in an array and then will show or hide the neccessary 
    elements. This effect will create the Paging effect
  Parameters: Takes the page value of 1,2, ... 6 
  Returns: Nothing
*/
function showPage(page) {
    const pages = ['home', 'evaluationPage', 'elist', 'gpsPage', 'configurationPage'];
    let i = 0;
    for (i; i < pages.length; i += 1) {
        if (page === pages[i]) {
            document.getElementById(pages[i]).style.display = 'block';
            location.hash = `${pages[i]}`;
        } else {
            document.getElementById(pages[i]).style.display = 'none';
        }
    }
}
/*
Description: 
Parameters: 
Return: 
*/
// TODO: Create a way to illustrate that the back button is not an option
// DEBUG: the onhash change event dosent get called on the url changing but gets called only on page refresh/reload
setTimeout(hashCheck(window.location.hash), 100);

function hashCheck(hash) {
    console.log("running func");
    if (hash != window.location.hash) {
        console.log("triggered onhaschange: " + window.location.href + " and " + window.location.hash);
    }
}

window.addEventListener("hashchange",function(){
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
    let nameformidmap = {
        'runs': 'runform',
        'evals': 'evaluationForm',
        'configs': 'configurationForm',
        'locations': 'gpsform'
    }
    console.log("Step 1");
    console.log(thingtosave);
    let o = getObjectFromForm(nameformidmap[thingtosave]);
    allthings[thingtosave].push(o);
    console.log(o);
    savealltolocalstorage();
    rerenderall();

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
function loadFormFromObject(index, thingtype, page) {
    showPage(page);
    let nameformidmap = {
        'runs': 'runform',
        'evals': 'evaluationForm',
        'configs': 'configurationForm',
        'locations': 'gpsform'
    }
    let array = allthings[thingtype];
    let keyobject = array[index]
    let form = document.getElementById(nameformidmap[thingtype]);
    let elements = form.elements;
    let editedObject = {};

    let submitButton = document.getElementById(`${nameformidmap[thingtype]}Submit`);
 console.log(submitButton);
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].tagName == "BUTTON" || elements[i].type == "submit") continue;
        console.log(`Form elements value: ${elements[i].value} and allthings object ${keyobject[elements[i].name]}`)
        elements[i].value = keyobject[elements[i].name]
        editedObject[elements[i].name] = elements[i].value;
    }

    // FIXME: need to make the onclick reasign work !!!
    console.log(submitButton.onclick)
    submitButton.onclick = function temp(){
        tempSubmitFunc(editedObject,index,thingtype, submitButton);
    }
    console.log(submitButton.onclick)
    
    //object loaded to edit 

}

/*
Description: takes in the edited object and overwrites the old one and then resets the 
 onclick func to origanal fucntion 
Parameters: edited object, index of edited element, thingtype -> which can 'runs', 'locations' , 'configs', 'evals'
Return: 
*/
function tempSubmitFunc(newObject, index, thingtype, Sbutton) {
    allthings[thingtype][index] = newObject;
    savealltolocalstorage();
    rerenderall();
    savealltolocalstorage();
    // FIXME: need to make the onclick  re-reasign work !!!
    Sbutton.onclick = function origin(){saveToArray(thingtype);
    }
}

/*
Description: saves global array to localStorage 
Parameters: 
Return: 
*/
function savealltolocalstorage() {
    console.log("Step 3")
    localStorage.setItem("allthings", JSON.stringify(allthings));
}
/*
Description: Function for master rerender
Parameters: 
Return: 
*/
function rerenderall() {
    console.log("Step 4");
    rerenderElements('runs');
    rerenderElements('configs');
    rerenderElements('evals');
    rerenderElements('locations');
}
/*
Description:  rerenders the specific elements by key value 
Parameters:  a key value of ( 'runs', 'configs', 'evals', 'locations' )
Return: 
*/
function rerenderElements(kv) {
    let nameformidmap = {
        'runs': 'runlist',
        'evals': 'evaluationlist',
        'configs': 'configlist',
        'locations': 'locationslist'
    }
    let list = document.getElementById(nameformidmap[kv]);
    list.innerHTML = "";
    if (kv === 'runs') {
        console.log("Step 4.runs");
        createRunElements();
    } else if (kv == 'configs') {
        console.log("Step 4.configs");
        createConfigElements();
    } else if (kv == 'evals') {
        console.log("Step 4.evals");
        createEvalElements()
    } else if (kv == 'locations') {
        console.log("Step 4.locations");
        createLocationElements()
    }
}
/*
Description: loads the allthings localStorage object to the allthings gloabl objects
Parameters: 
Return: 
*/
function returnallfromlocalstorage() {
    console.log("Step 5")
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
    console.log(`Step 6.delete.${thingtype}`)
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
    if (option === 'eval') {
        document.getElementById('evalTeam').value = runs[keyNum].team;
        document.getElementById('evalTask').value = runs[keyNum].task;
    } else if (option === 'gps') {
        document.getElementById('gpsTeam').value = runs[keyNum].team;
        document.getElementById('gpsTask').value = runs[keyNum].task;
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
        for (var i = 0; i < allthings.configs.length; i++) {
            var opt = `Team:${allthings.configs[i].team} Name:${allthings.configs[i].name}`;
            var el = document.createElement("option");
            el.name = opt;
            el.textContent = opt;
            el.value = opt;
            document.getElementById('selectConfig').appendChild(el);
        }
    }
}
/*
Description: 
Parameters: 
Return: 
*/
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
                    <button class="ui green button" onclick="teamTaskRetriever('gps',${x},'gpsPage')" type="button" >GPS</button>
                    <button class="ui red button" onclick="deleteElementFromAllThings('runs',${x})" type="button">Delete</button>
                    <button class="ui purple button" onclick="teamTaskRetriever('eval',${x},'evaluationPage')" type="button" >Edit</button>
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
        <button class="ui  purple button" onclick="showPage('configurationPage')" type="button">Edit</button>
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
        let teamValue = allthings.evals[x].team;
        let taskValue = allthings.evals[x].task;
        let resultValue = allthings.evals[x].result;
        let percentValue = allthings.evals[x].percent;
        let flightControllerValue = allthings.evals[x].flightController;
        let configValue = allthings.evals[x].config;
        let timeValue = allthings.evals[x].time;
        let goaltimeValue = allthings.evals[x].goaltime;
        let notesValue = allthings.evals[x].notes;
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
                ${taskValue}
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
        <button class="ui  purple button" onclick="loadFormFromObject(${x},'evals',2)"  type="button" ">Edit</button>
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
    </div>
</div>`;
        if (x === 0) {
            evaluationlist.innerHTML = template;
        } else if (x !== null || x > 0) {
            document.getElementById(`evals${x - 1}`).insertAdjacentHTML('afterend', template);
        }
    }
}

function createLocationElements() {
    console.log("Step 4.locations.create");
    let locationlist = document.getElementById('locationlist');
    for (x = 0; x < allthings.locations.length; x += 1) {
        let teamValue = allthings.locations[x].team;
        let taskValue = allthings.locations[x].task;
        let latValue = allthings.locations[x].latitude;
        let longValue = allthings.locations[x].longitude;
        let template = `<div id="evaluation${x}" class="ui">
    <div class=" ui four column grid  attached  blue segment">
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
        </div>
    </div>
    <div class="ui two bottom attached buttons">
        <button class="ui  red button" onclick="deleteElementFromAllThings('locations',${x})" type="button">Delete</button>
    </div>
</div>`;
        if (x === 0) {
            locationslist.innerHTML = template;
        } else if (x !== null || x > 0) {
            document.getElementById(`locations${x - 1}`).insertAdjacentHTML('afterend', template);
        }
    }

}