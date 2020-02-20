import React from 'react';
import "components/Appointment";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Confirm from "./Confirm";
import Status from "./Status";

import './styles.scss';
import  useVisualMode  from "hooks/useVisualMode";



export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = 'CONFIRM';

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview).then(() => transition(SHOW))
    
  }

  function onDelete(id) {
    const interview = null;
    transition(DELETING);
    props.cancelInterview(props.id, interview).then(()=> transition(EMPTY))
  }
  return (
  
   <article className='appointment'>
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd = {() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show 
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onDelete={(id, interview) =>  transition(CONFIRM)}
        />
      )}
      {mode === CREATE && (
        <Form
        interviewers={props.interviewers}
        onCancel = {() => back(EMPTY)}
        onSave = {(name,interviewer) => save(name, interviewer)}
        />
      )}
      {mode === SAVING && (
        <Status 
        message={'Saving'}
        />
      )
    }
    {
      mode === DELETING && (
        <Status 
        message={'Deleting'}
        />
      )
    }
    {
      mode === CONFIRM && (
        <Confirm 
         message={'Delete the appointment?'}
         onConfirm={() => onDelete(props.id)}
         onCancel={() => transition(SHOW)}
        />
      )
    }
  
   </article>
  );
}