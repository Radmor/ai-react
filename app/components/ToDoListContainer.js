import React from 'react';
// import List from 'material-ui/List/List'

import AppBar from 'material-ui/AppBar';
import ToDoList from './ToDoList'
import TextField from 'material-ui/TextField'
import ToDoListItem from './ToDoListItem'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const ToDoListContainerStyle = {
  width: '50%',
  textAlign: 'center'
};

const TextInputStyle ={
    width:'90%'
}

class ToDoListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

  createToDoListItem(e){
    e.preventDefault();
    console.log(this);
    console.log('here');
  }
  
  render() {
    return (
      <Paper zDepth={2} style={ToDoListContainerStyle}>
        <form onSubmit={(e) => this.createToDoListItem(e, 'lastName')}>
          <TextField 
            underlineShow={false}
            style={TextInputStyle}
          />
        </form>
          <Divider/>
          <ToDoList/>
      </Paper>
    );
  }
}

export default ToDoListContainer;