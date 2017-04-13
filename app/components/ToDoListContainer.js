import React from 'react';
// import List from 'material-ui/List/List'

import AppBar from 'material-ui/AppBar';

class ToDoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      sideNavOpen: false,
      modalOpen: false
    }
  }
  
  render() {
    return (
        <AppBar
              title="To Do List"
        />
    );
  }
}

export default ToDoListContainer;