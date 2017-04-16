import React from 'react'
import TextField from 'material-ui/TextField';
import ListItem from 'material-ui/List/ListItem'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentClear from 'material-ui/svg-icons/content/clear'
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';



const ToDoListItemStyle ={
    width:'90%'
}

class ToDoListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            sideNavOpen: false,
            modalOpen: false,
            text: 'default text'
        }
    }

    handleDelete(id) {
        this.props.handleDelete(id);
    }

    handleChecked(id){
        this.props.handleChecked(id);
    }

    render(){
        return(
            <ListItem>
                <Checkbox
                    style={{ display: 'inline-block', width:''}}
                    checked={this.props.checked}
                    onCheck={this.handleChecked.bind(this, this.props.id)}
                />
                <TextField
                    value={this.props.value}
                    underlineShow={false}
                    style={ToDoListItemStyle}
                />
                <IconButton onClick={this.handleDelete.bind(this, this.props.id)}>
                    <ContentClear />
                </IconButton>
                <Divider/>
            </ListItem>
        );
    }
}

export default ToDoListItem