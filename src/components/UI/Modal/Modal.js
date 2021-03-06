import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  // useEffect(() => {
  //   console.log('[Modal.js] component is being rendered only when show prop');
  // },[props.show])

  componentDidUpdate() {
    console.log('[Modal.js] update was triggered');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show
  }

  shouldC

  render () {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} click={this.props.click}/>
        <div 
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}      
        </div>
      </React.Fragment>
    );
  }
  
}
 
export default Modal;