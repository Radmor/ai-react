import React from 'react';
// import List from 'material-ui/List/List'

import AppBar from 'material-ui/AppBar';
import ToDoList from './ToDoList'
import TextField from 'material-ui/TextField'
import ToDoListItem from './ToDoListItem'

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
      <div>
        <AppBar/>
          <ToDoList/>
        </div>
    );
  }
}

export default ToDoListContainer;