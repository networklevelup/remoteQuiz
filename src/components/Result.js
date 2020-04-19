import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import picAble from '../resultpictures/able.png';
import picOffice from '../resultpictures/office.png';
import picPerfect from '../resultpictures/perfect.png';
import picStruggle from '../resultpictures/struggle.png';

function Result(props) {
 /* If Else for the right result description */
  let typeDescription = '';
    if(props.quizResult == 'You are clearly an office worker') {
      typeDescription = 'Your results suggest that you prefer a collegial, personal work environment, with teamwork, constant positive feedback, and clearly defined expectations. And that’s why Working In-The-Office is likely a great place for you. Succeeding in an office setting requires special personality traits, like collaborating well with others, following rules, meeting expectations and accumulating recognition. And that’s where your personal sweet spot seems to be.'
      } else if(props.quizResult == 'You will struggle to work remotely') {
        typeDescription = 'Your results suggest that you might be rather an office worker. When you’re working remotely, you’re often on your own. There often isn’t a team behind you to cover-up poor performance. Your drive, ambition, goals, and performance will determine your success. On the other hand, to succeed while working in the office often requires a different mindset; it means collaborating well with others, following rules and meeting expectations, accumulating recognition, and working at a reasonable pace.'
      } else if(props.quizResult == 'You are able to work remotely') {
        typeDescription = 'Your results suggest that you are more of a remote worker. When you’re working remotely, you’re often on your own. There often isn’t a team behind you to cover-up poor performance. Your drive, ambition, goals, and performance will determine your success. On the other hand, to succeed while working in the office often requires a different mindset; it means collaborating well with others, following rules and meeting expectations, accumulating recognition, and working at a reasonable pace.'
      } else if(props.quizResult == 'You are a remote work advocate') {
        typeDescription = 'Your results suggest that you are good at working on your own and setting your own goals. You are fine without the daily direct presonal contact and you don not need constant affirmation of your work achievings. When you’re working remotely, you’re often on your own. There often isn’t a team behind you to cover-up poor performance. Your drive, ambition, goals, and performance will determine your success. And that’s where your personal sweet spot seems to be.'
      } 

 /* If Else for the right result picture */
 let resultPicture
 if(props.quizResult == 'You are clearly an office worker') {
  resultPicture = picOffice
  } else if(props.quizResult == 'You will struggle to work remotely') {
    resultPicture = picStruggle
  } else if(props.quizResult == 'You are able to work remotely') {
    resultPicture = picAble
  } else if(props.quizResult == 'You are a remote work advocate') {
    resultPicture = picPerfect
  } 


  return (
     <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >

      <div className="content">
        <div className="resultPicture">
        <img src={resultPicture} alt="Result Picture"/>
        </div>

        <div>
        <strong>{props.quizResult}</strong>!
        </div>
      
        <div>
        <p>{typeDescription}</p>
        </div>
      </div>

    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
