var bowlingScore = function(rolls) {
    // Keep track of total score and which roll number we're on
    let total = 0
    let rollNum = 0
    
    // Keep track of all 10 frames of the game
    for (let frame=0; frame<10; frame++) {
      let score = rolls[rollNum] + rolls[rollNum+1]
      
      // Check for strike
      if(rolls[rollNum] === 10) {
        // Apply strike bonus from next two frames 
        total += score + rolls[rollNum+2]
        
        // Strike only uses up one roll
        rollNum ++
        continue
      }
      
      // Check for spare
      if(score == 10) {
        // Apply bonus from next frame
        total += 10 + rolls[rollNum+2]
      } else {
        // No spare, just add current frame score to total
        total += score 
      }
      
      // Move to rolls associated with next frame
      rollNum += 2
    }
    
    return total
  }