import React from 'react';
import DayListItem from 'components/DayListItem';
// import days from 'components/days';

export default function DayList(props) {
   const list = props.days.map(day => {
    return (
    <DayListItem 
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={props.setDay}
    />
    );
  });

  return (
    <ul>
      {list}
    </ul>
  )


}