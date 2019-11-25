import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    sideDrawerOpened: false,
  }

  handleSideDrawerClose = () => {
    this.setState({ sideDrawerOpened: false });
  }

  menuClickHandler = () => {
    this.setState((prevState) => {
       return { sideDrawerOpened: !prevState.sideDrawerOpened }
      });
  }

  render () {
    return (
      <Aux>
        {/* <div>Toolbar, Side Drawer, Backdrop</div> */}
        <Toolbar clickDrawer={this.menuClickHandler}/>
        <SideDrawer 
          isOpen={this.state.sideDrawerOpened}
          close={this.handleSideDrawerClose}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
    </Aux>
    );
  }
  
};

export default Layout;