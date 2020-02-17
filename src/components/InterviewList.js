/**
 * This file takes in 3 props
 * array, number, function
 */

 import React from 'react';
 import 'components/InterviewList.scss';

 export default function InterviewList(props) {
   return(
    <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list"></ul>
  </section>
   );
 }