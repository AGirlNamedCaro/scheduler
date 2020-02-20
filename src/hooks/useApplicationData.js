import React, {useState, useEffect} from "react";
import "components/Application.scss";
import 'components/Appointment';
import axios from 'axios';

export default function useApplicationData() {
  
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
    .then(() => {
      setState({
        ...state,
        appointments
        })
    }
    )
}

 const cancelInterview = (id, interview) => {
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
    method: 'delete',
    url: `http://localhost:8001/api/appointments/${appointment.id}`,
    data: {
      interview
    }
  })
  .then(() => {
    setState({
      ...state,
      appointments
      })
  }
  
  )

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


  return {
      state,
      setDay,
      bookInterview,
      cancelInterview
    }

}