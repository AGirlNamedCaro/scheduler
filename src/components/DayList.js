import React from 'react';
import DayListItem from 'components/DayListItem';
// import days from 'components/days';

export default function DayList(props) {
  // console.log("props from DayList", props);
   const list = props.days.map(day => (
      <DayListItem 
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    )
  )

  return (
    <ul>
      {list}
    </ul>
  )


}
