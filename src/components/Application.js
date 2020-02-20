import React, {useState, useEffect} from "react";
import "components/Application.scss";
import DayList from "components/DayList";
import 'components/Appointment';
import Appointment from "./Appointment";
import axios from 'axios';
import {getAppointmentsForDay, getInterview, getInterviewersForDay} from '../helpers/selectors'



export default function Application(props) {
  //This line adds 'STATE' to your application

  function bookInterview(id, interview) {
    console.log(id, interview);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview}
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    
    return axios({
      method: 'put',
      url: `http://localhost:8001/api/appointments/${appointment.id}`,
      data: {
        interview
      }
    })
    .then((
    setState({
    ...state,
    appointments
    })))

   

}


  

  const setDay = day => setState(prev => ({ ...prev, day }));


  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  
  useEffect(() => {
    let daysURL = "http://localhost:8001/api/days";
    let apptsURL = "http://localhost:8001/api/appointments";
    let intervURL = "http://localhost:8001/api/interviewers";
    
    const promiseDays = axios.get(daysURL);
    const promiseAppts = axios.get(apptsURL);
    const promiseInterviewers = axios.get(intervURL);
    Promise.all([
      Promise.resolve(promiseDays), 
      Promise.resolve(promiseAppts),
      Promise.resolve(promiseInterviewers)
    ])
    .then((all) => {
      setState(prev => ({...prev, days: all[0].data,appointments: all[1].data, interviewers: all[2].data }));
    })
  },[]);

  
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
              days={state.days}
              day={state.day}
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
        { getAppointmentsForDay(state,state.day).map(appointment => {
          const interview = getInterview(state, appointment.interview);
          const interviewers = getInterviewersForDay(state, state.day)
          return (

            <Appointment
            key={appointment.id}
            {...appointment}
            interview={interview}
            interviewers={interviewers}
            bookInterview={bookInterview}
            />
            
          )
          }) }
        <Appointment key="last" time="6pm"  />
      </section>
    </main>
  );
}
