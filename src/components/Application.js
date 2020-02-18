import React, {useState, useEffect} from "react";
import "components/Application.scss";
import DayList from "components/DayList";
import 'components/Appointment';
import Appointment from "./Appointment";
import axios from 'axios';


export default function Application(props) {
  //This line adds 'STATE' to your application
  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8001/api/days')
    .then((response) => {
      setDays(response.data)
    })
  })

  const appointments = [
    {
      id: 1,
      time: "12pm",
    },
    {
      id: 3,
      time: "1pm",
      interview: {
        student: "Austin Nazareth",
        interviewer: {
          id: 3,
          name: "Sylvia Palmer",
          avatar: "https://i.imgur.com/LpaY82x.png",
        }
      }
    },
    {
      id: 2,
      time: "1pm",
      interview: {
        student: "Lydia Miller-Jones",
        interviewer: {
          id: 1,
          name: "Sylvia Palmer",
          avatar: "https://i.imgur.com/LpaY82x.png",
        }
      }
    }
  ];
  
  return (
    <main className="layout">
      <section className="sidebar">
        {
          <div>
            <img
              className="sidebar--centered"
              src="images/logo.png"
              alt="Interview Scheduler"
            />
            <hr className="sidebar__separator sidebar--centered" />
            <nav className="sidebar__menu">
            <DayList
              days={days}
              day={day}
              setDay={setDay}
            />
            </nav>
            <img
              className="sidebar__lhl sidebar--centered"
              src="images/lhl.png"
              alt="Lighthouse Labs"
            />
          </div>
          
        }
      </section>
      
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
        { appointments.map(appointment =>(
          <Appointment
            key={appointment.id}
            {...appointment}
          />
          
        ) ) }
        <Appointment key="last" time="6pm" />
      </section>
    </main>
  );
}
