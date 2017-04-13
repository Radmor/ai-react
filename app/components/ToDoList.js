import React from 'react'
import List from 'material-ui/List/List'
import ToDoListItem from './ToDoListItem'

class ToDoList extends React.Component{
    constructor(props) {
    super(props);
    this.state= {
      sideNavOpen: false,
      modalOpen: false
    }
  }

  render(){
      return(
            <List>
              <ToDoListItem/>
        </List>
      );
  }
}

export default ToDoList