import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  // const btnClass = [classes.Button, classes[props.type]].join(' ');
  const btnClass = `${classes.Button} ${classes[props.type]}`;
  return (
    <button className={btnClass} onClick={props.click}>
      {props.children}
    </button>
  )
};

export default Button;