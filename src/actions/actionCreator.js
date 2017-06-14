// increment will handle small stuff like attempts 
export function increment(index) {
  return {
    type: 'INCREMENT_ATTEMPTS',
    index
  }
}

//save Team
export function saveRun(ID, task, team) {
  return {
    type: 'SAVE_RUN',
    ID,
    task,
    team
  }
}

//delete team
export function deleteRun(ID,team) {
  return {
    type: 'DELETE_RUN',
    ID,
    task,
    team
  }
}

// save Eval
export function saveEval(attempt, notes, time, goalTime, gpsLong, gpsLat, result, successPercentage) {
  return {
    type: 'SAVE_EVAL',
    attempt,
    notes,
    time,
    goalTime,
    gpsLong,
    gpsLat,
    result,
    successPercentage
  }
}

// delete eval
export function deleteEval(postId, i) {
  return {
    type: 'DELETE_EVAL',
    //TBD
  }
}