//DATA Modals to save all important info
var validTeams = []
var validConfigs = []
var evals = []

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // document ready
        showPageOne();
    }
};
function addTeam (teamArray){

}


function addConfigs (configsArray){
    
}

function addEvals (evalArray){
    
}

// Page 1 Show ids: navbar, runform
// Hide: evaluationform,evaluationlist, gpsform, configurationform, configurationlist
function showPageOne(){
    //show
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('runform').style.display = 'block';

    //hide
    document.getElementById('evaluationform').style.display = 'none';
    document.getElementById('evaluationlist').style.display = 'none';
    document.getElementById('gpsform').style.display = 'none';
    document.getElementById('configurationform').style.display = 'none';
    document.getElementById('configurationlist').style.display = 'none';
}ss

// Page 2 Show ids: navbar, evaluationform
// Hide: runform ,evaluationlist, gpsform, configurationform, configurationlist
function showPageTwo(){
    //show
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('evaluationform').style.display = 'block';

    //hide
    document.getElementById('runform').style.display = 'none';
    document.getElementById('evaluationlist').style.display = 'none';
    document.getElementById('gpsform').style.display = 'none';
    document.getElementById('configurationform').style.display = 'none';
    document.getElementById('configurationlist').style.display = 'none';
}

// Page 3 Show ids: navbar,  evaluationlist
// Hide: runform, evaluationform, gpsform, configurationform, configurationlist
function showPageThree(){
    //show
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('evaluationlist').style.display = 'block';

    //hide
    document.getElementById('runform').style.display = 'none';
    document.getElementById('evaluationform').style.display = 'none';
    document.getElementById('gpsform').style.display = 'none';
    document.getElementById('configurationform').style.display = 'none';
    document.getElementById('configurationlist').style.display = 'none';
}

// Page 4 Show ids: navbar, gpsform
// Hide: runform, evaluationform,evaluationlist, configurationform, configurationlist
function showPageFour(){
    //show
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('gpsform').style.display = 'block';

    //hide
    document.getElementById('runform').style.display = 'none';
    document.getElementById('evaluationform').style.display = 'none';
    document.getElementById('evaluationlist').style.display = 'none';
    document.getElementById('configurationform').style.display = 'none';
    document.getElementById('configurationlist').style.display = 'none';
}

// Page 5 Show ids: navbar, configurationform ,
// Hide: runform, evaluationform,evaluationlist,gpsform , configurationlist
function showPageFive(){
    //show
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('configurationform').style.display = 'block';

    //hide
    document.getElementById('runform').style.display = 'none';
    document.getElementById('evaluationform').style.display = 'none';
    document.getElementById('evaluationlist').style.display = 'none';
    document.getElementById('gpsform').style.display = 'none';
    document.getElementById('configurationlist').style.display = 'none';
}

// Page 6 Show ids: navbar, configurationlist ,
// Hide: runform, evaluationform,evaluationlist,gpsform , configurationform
function showPageSix(){
    //show
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('configurationlist').style.display = 'block';

    //hide
    document.getElementById('runform').style.display = 'none';
    document.getElementById('evaluationform').style.display = 'none';
    document.getElementById('evaluationlist').style.display = 'none';
    document.getElementById('gpsform').style.display = 'none';
    document.getElementById('configurationform').style.display = 'none';
}