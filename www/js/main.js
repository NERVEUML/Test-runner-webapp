//DATA Modals to save all important info
var validTeams = []
var validConfigs = []
var evals = []

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // document ready
        console.log("document ready ");
        showPage(1);
    }
};
function addTeam (teamArray){

}


function addConfigs (configsArray){

}

function addEvals (evalArray){

}
function showPage(page){
    let pages = ['runform','evaluationform','evaluationlist','gpsform','configurationform','configurationlist'];
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
    console.log("save success Full");
}

setInterval( save , 10000);