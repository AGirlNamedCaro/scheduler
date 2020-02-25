//  Create a separate function called updateSpot(dayString, daysArray, increment)
// return daysArray.map(() => 
// if dayString and item.name match => 
// update spots
// else keep looping
// return map

// )
import React from 'react';


export default function updateSpot(dayString, daysArray, value) {
  return daysArray.map((day) => {
    if(dayString === day.name) {
      day.spots += value
    }
    return day
  })
}


 

