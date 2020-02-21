import React, {useReducer, useEffect} from "react";
import "components/Application.scss";
import 'components/Appointment';
import axios from 'axios';

export default function useApplicationData() {
  
  
  const cancelInterview = (id) => {
    
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    return axios({
      method: 'delete',
      url: `http://localhost:8001/api/appointments/${appointment.id}`
    })
    .then(() => {
      dispatch({ type: SET_INTERVIEW, value: {appointments}})

    }
    
    )
    
  }
  
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
      dispatch({ type: SET_INTERVIEW, value: {appointments} })
       
    }
    )
}
  
const initialState = {
  
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}
  
}

const SET_DAY = "SET_DAY";
const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_INTERVIEW = "SET_INTERVIEW";

const setDay = (day) => {
  dispatch({ type: SET_DAY, value: {day} }) 
}

const reducer = (state, action) => {
  switch(action.type) {
    case SET_DAY: 
     {
       return { ...state, ...action.value}
    }
    case SET_APPLICATION_DATA:
      {
        return { ...state, ...action.value }
      }
      case SET_INTERVIEW: {
        return { ...state, ...action.value}
      }
      default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
 }

 const [state,dispatch] = useReducer(reducer,initialState);

  
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
    .then(([{data: days}, {data: appointments}, {data: interviewers}]) => {
      dispatch({ type: SET_APPLICATION_DATA, value: {days, appointments, interviewers} }) 

    })
  },[]);


  return {
      state,
      setDay,
      bookInterview,
      cancelInterview
    }

}