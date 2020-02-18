export function getAppointmentsForDay(state, day) {
  //We need to find the object in our state.days array whose name === day
    //HOW?
      //Filter through the object and compare name properties
    const filteredDays = state.days.filter( dayObj => dayObj.name === day);
    const matchingArray = [];

    for(const key in state.appointments) {
      for(const key2 of filteredDays) {
        for(let i = 0; i < key2.appointments.length; i++) {
          
          if(Number(key) === key2.appointments[i]) {
            matchingArray.push(state.appointments[key]);
          }
        }
      }
    }
    return matchingArray;



}
