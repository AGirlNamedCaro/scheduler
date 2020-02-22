/**
 * SPOTS REMAINING FEATURE
 * OPTIONS:
 * 1.Add new actions
 * 2.Use an existing action and change the state in 2 places at the same time
 * TIPS:
 * 1.apt id is known when an interview is confirmed or canceled by the server
 * 2.Changes should be limited to the useApplicationData.js file
 * 
 * SINCE spots should change based on the number of appointments displayed
 * on the page therefore it means that the props passed to the FormatSpots function
 * should be the appointment ID?
 * Figure out how the "spots" counter works
 * Where is the props.spots getting the db spots? & how can i access them?
 *  //SPOTS are props from the Daylist component. Daylist passes them down 
 * to DayListItem Where they are being formatted
 * //Currently there is no spots argument being passed down in the DayList component
 * *********************************************************************************************
 * Create a separate function called updateSpot(dayString, daysArray, increment)
 * Copy the object into a new copy that is not shallow shallow
 * loop through the object & make sure that dayString matches the array item.name
 * Get the index of where the object and the day match
 * Use that index to create a NEW shallow object copy and insert the updated spots based on the increment/decrement value
 * that was passed in
 * Return this object
 * 
 *  * Create a separate function called updateSpot(dayString, daysArray, increment)
    return daysArray.map(() => 
    if dayString and item.name match => 
    update spots
    else keep looping
    return map

    )
 * 
 * 
 * 
 * 
 * 
 * 
 */