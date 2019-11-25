import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import classes from './SideDrawer.module.css';
import BackDrop from '../../UI/Backdrop/Backdrop';

const sideDrawer  = (props) => {
  let transitionClasses = [classes.SideDrawer, classes.Close];
  if (props.isOpen) {
    transitionClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <>
      <BackDrop show={props.isOpen} click={props.close}/>
      <div className={transitionClasses.join(' ')}>
        <Logo height="11%"/>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  )
}

export default sideDrawer;