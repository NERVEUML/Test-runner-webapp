var validRuns = []
var validConfigs = []
var evals = []

var INDEX = 0;

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        showPage(1);
        
        tempIndex = localStorage.getItem('index');
        if(tempIndex != 0 || tempIndex != INDEX){
            INDEX = tempIndex;
        
	}
	tempRuns = localStorage.getItem('runs');
	if(validRuns != null || validRuns != tempRuns){
		validRuns = tempRuns;
	}
    }
};



// ShortHand varibale to access the run form on the home page
var runFORM = document.getElementById('runform')

// fucntion is trigger by and onclick fucntion of submit button
// function gets values from form by taking them by name.value
// Then the fucntion takes the the GLOBAL var INDEX and sets the new 
// element to save to that index and then increments INDEX
function addTEAM (e){
    event.preventDefault(e);
    tempTeam = runFORM.team.value;
    tempTask = runFORM.task.value;
    validRuns[INDEX] = { team:tempTeam, task:tempTask};
    INDEX++;
}

function loadTeam(){
	// <div id ="run" class="ui four column grid segment" >
    createElementExtended('div',"run","runlist","ui four column grid segment",'run');
	
	//<div id="run_wrapper" class="stretched row">
	var run_wrapper = document.createElement('div');
	run_wrapper.className="stretched row";
	run_wrapper.id = "run_wrapper";
    run.appendChild(run_wrapper);
    createElementExtended('div',"run_wrapper")
    
    //<div class="column">
	var team_column = document.createElement('div');
	team_column.className="ui";
	team_column.id = "team_column";
	run_wrapper.appendChild(team_column);
	//</div>

	
	//</div>
	//</div>

}

// makes life easier when trying to crete elements with lots of nested items
function createElementExtended( type, _divname, parentDiv, _className, _id){
    var temp = document.createElement(type);
	_divname.className= _className;
	_divname.id = _id;
	parentDiv.appendChild(_divname);
}

// This takes all pages by IDs and show and hides them based on what page should be displayed
function showPage(page){
    let pages = ['home','evaluationform','evaluationlist','gpsform','configurationform','configurationlist'];
    let i = 0;
    for(i ; i < pages.length; i++){
        if(page == i + 1){
            document.getElementById(pages[i]).style.display ='block';
        }else{
            document.getElementById(pages[i]).style.display='none';
        }
    }
}

// Function used to save the arrays every so often in this case 
// the function is being call every 2 seconds for dev purposes
function save(){
    localStorage.setItem('runs',JSON.stringify(validRuns));
    //localStorage.setItem('configs',JSON.stringify(validConfigs));
    //localStorage.setItem('evals',JSON.stringify(evals));
    localStorage.setItem('index', INDEX);
    console.log(INDEX);
    console.log(validRuns);
    console.log("save success Full");
}

function reset(){
    localStorage.clear();
}

setInterval( save , 2000);
