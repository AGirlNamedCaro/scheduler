import React, {useState} from "react";
import "components/Application.scss";
import DayList from "components/DayList";
import 'components/Appointment';
import Appointment from "./Appointment";



export default function Application(props) {
  //This line adds 'STATE' to your application
  const [day, setDay] = useState("Monday");
  const days = [
    {
      id: 1,
      name: "Monday",
      spots: 2,
    },
    {
      id: 2,
      name: "Tuesday",
      spots: 5,
    },
    {
      id: 3,
      name: "Wednesday",
      spots: 0,
    },
  ];

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
