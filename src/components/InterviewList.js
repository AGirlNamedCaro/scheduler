/**
 * This file takes in 3 props
 * array, number, function
 */
//TODO creating a controlled list -- OPTIONAL - Monday: Listing Interviewers II

 import React from 'react';
 import "components/InterviewList.scss";
 import InterviewerListItem from "components/InterviewerListItem";

 export default function InterviewList(props) {
   const interviewers = props.interviewers.map(interviewer => {
     return(
       <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={ event => props.setInterviewer(interviewer.id) }
        />
     );
   });

   return(
    <section className="interviewers">
    <h4 className="interviewers__header text--light">{interviewers.name}</h4>
    <ul className="interviewers__list">{interviewers}</ul>
  </section>
   )
 }