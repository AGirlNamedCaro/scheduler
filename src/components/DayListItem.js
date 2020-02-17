
import React from 'react';
import "components/DayListItem.scss";
import classnames from 'classnames';
//This component takes in 3 attributes 
// 1.Name, 2.Spots, 3. Selected
//And one action: setDay
export default function DayListItem(props) {
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
    
  });
  
  
  const formatSpots = (props) => {

    if(props === 0) {
      return "no spots remaining";
    }
    if(props === 1) {
      return "1 spot remaining";
    }
    if(props === 2) {
      return "2 spots remaining";
    }
    if(props === 5) {
      return "5 spots remaining";
    }
    
  }
  return(
    
    // Represents the entire day item
    
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      
      {/* Should display the day name */}
      <h2 className='text--regular'>{props.name}</h2>
      <h3 className='text--light'>{formatSpots(props.spots)}</h3>
    </li>
  )
}