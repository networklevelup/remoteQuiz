import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {

  let typeDescription = '';

  if(props.quizResult == 'You are a remote work advocate') {
    typeDescription = 'YOU ARE STUPID'
    } else if(props.quizResult == 'You are able to work remotely') {
      typeDescription = 'YOU ARE CLEVER'
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
      <div>
        You are the type: <strong>{props.quizResult}</strong>!
      </div>

      <div>
      {typeDescription}

      </div>

    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
