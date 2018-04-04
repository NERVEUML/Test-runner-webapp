let nameformidmap = {
  runs: "runform",
  evals: "evaluationForm",
  configs: "configurationForm",
  locations: "gpsform"
};
let namelistidmap = {
  runs: "runlist",
  evals: "evaluationlist",
  configs: "configlist",
  locations: "locationslist"
};

// Get gps coordinates for attempts
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, error);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function error(err) {
  window.alert(err);
  console.log(`GPS ERROR: ${err}`);
}
function showPosition(position) {
  console.log(position.coords);

  let latbox = position.coords.latitude;
  document.getElementById("input-lat").value = latbox;
  let longbox = position.coords.longitude;
  document.getElementById("input-long").value = longbox;
}

// Stopwatch

let seconds = 00;
let tens = 00;
let minutes = 00;
let goalTime = "";
let time = "";
let Interval;

function start() {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);

  let epoch = Date.now();
  document.getElementById("eStart").value = epoch;
}

function stop() {
  if (tens < 10) tens = "0" + tens;
  if (seconds < 10) seconds = "0" + seconds;
  if (minutes < 10 && minutes != 0) minutes = "0" + minutes;

  document.getElementById("time").value = `${minutes}:${seconds}:${tens}`;
  let epoch = Date.now();
  let d = new Date();
  let UTC = d.toISOString();
  document.getElementById("eEnd").value = epoch;
  document.getElementById("eUTC").value = UTC;
  clearInterval(Interval);
}
function goal() {
  if (tens < 10) tens = "0" + tens;
  if (seconds < 10) seconds = "0" + seconds;
  if (minutes < 10 && minutes != 0) minutes = "0" + minutes;

  document.getElementById("goaltime").value = `${minutes}:${seconds}:${tens}`;
}

function resetTime() {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  minutes = "00";
  document.getElementById("tens").innerHTML = tens;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("goaltime").value = " ";
  document.getElementById("time").value = " ";
}

function startTimer() {
  tens++;

  if (tens < 9) {
    document.getElementById("tens").innerHTML = "0" + tens;
  }
  if (tens > 9) {
    document.getElementById("tens").innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    document.getElementById("seconds").innerHTML = "0" + seconds;
    tens = 0;
    document.getElementById("tens").innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    document.getElementById("seconds").innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    document.getElementById("minutes").innerHTML = "0" + minutes;
    seconds = 0;
    document.getElementById("seconds").innerHTML = "0" + 0;
  }
  if (minutes > 9) {
    document.getElementById("minutes").innerHTML = minutes;
  }
}
// CSV work.
// line 1: Team Name, task Name, Config Name, Run/Attempt, Total Time, Goal Time, Start Date Epoch, End Date Epoch,notes, Percent Complete, Location, end Time UTC
// line 2: MIT, 1-1, Batman,1,2:35,1:30,1519243095649 , 1519243095649(+-),they stunk, 50%,
function ConvertToCSV(key) {
  let nameformidmap = {
    evals: allthings.evals,
    locations: allthings.locations
  };
  // TODO: csv format handle spaces
  if (key === "evals") {
    var headers = [
      "Team Name",
      "Task Name",
      "Config Name",
      "Attempt",
      "Total Time",
      "Goal Time",
      "Start Date Epoch",
      "End Date Epoch",
      "notes",
      "Percent Complete",
      "end Time UTC"
    ];
    var icky = [
      "team",
      "task",
      "config",
      "attempt",
      "time",
      "goaltime",
      "eStart",
      "eEnd",
      "notes",
      "percent",
      "eUTC"
    ];
  }
  let str = "";
  for (let x = 0; x < headers.length; x++) {
    str += '"' + headers[x] + '",';
  }
  str += "\n";
  console.log("key: " + key);
  let objArray = nameformidmap[key];
  console.log("objArray: " + objArray);
  // TODO: csv format line end include comma
  for (var i = 0; i < objArray.length; i++) {
    var line = "";
    for (var fieldIndex in icky) {
      var fieldName = icky[fieldIndex];
      if (line != "") line += ",";
      line += objArray[i][fieldName];
    }
    str += line + "\r\n";
  }
  return str;
}
function saveFile(fileName, fileData) {
  //https://stackoverflow.com/a/28966545
  // Get access to the file system
  //LocalFileSystem undefined, trying to replace with value per
  //https://stackoverflow.com/questions/27985512/cordova-localfilesystem-is-not-defined
  //
  window.requestFileSystem(
    1,
    1024 * 1024,
    function(fileSystem) {
      // Create the file.
      fileSystem.root.getFile(
        fileName,
        { create: true, exclusive: false },
        function(entry) {
          // After you save the file, you can access it with this URL
          myFileUrl = entry.toURL();
          entry.createWriter(
            function(writer) {
              writer.onwriteend = function(evt) {
                alert("Successfully saved file to " + myFileUrl);
              };
              // Write to the file
              writer.write(fileData);
            },
            function(error) {
              alert("Error: Could not create file writer, " + error.code);
            }
          );
        },
        function(error) {
          alert("Error: Could not create file, " + error.code);
        }
      );
    },
    function(evt) {
      alert("Error: Could not access file system, " + evt.target.error.code);
    }
  );
}
