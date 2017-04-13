import React from 'react'
import TextField from 'material-ui/TextField';
import ListItem from 'material-ui/List/ListItem'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentClear from 'material-ui/svg-icons/content/clear'

class ToDoListItem extends React.Component{
    constructor(props) {
    super(props);
    this.state= {
      sideNavOpen: false,
      modalOpen: false,
      text: 'default text'
    }
  }
  render(){
      return(
        <ListItem>
        <TextField
            defaultValue={this.state.text}
        />
        <IconButton tooltip="SVG Icon">
            <ContentClear />
        </IconButton>
        </ListItem>
      );
  }
}

export default ToDoListItem