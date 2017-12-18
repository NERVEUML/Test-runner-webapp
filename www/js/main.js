//DATA Modals to save all important info

var validRuns = []
var validConfigs = []
var evals = []

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        showPage(1);
    }
};


function addItem (){
    var item = {team:'', task:''};
    var teamValue= this.team.value;
    console.log(teamValue);
    var taskValue= this.task.value;
    console.log(taskValue);
    item.team = teamValue;
    item.task = taskValue;
    console.log(item);
    validRuns.push(item);
    console.log(validRuns);
}

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

function save(){
    localStorage.setItem('runs',JSON.stringify(validRuns));
    localStorage.setItem('configs',JSON.stringify(validConfigs));
    localStorage.setItem('evals',JSON.stringify(evals));
    console.log("save success Full");
}

setInterval( save , 10000);