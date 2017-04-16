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
            text: 'default text',
            deleted: false
        }
    }

    handleDelete(id) {
        console.log('delete');
        console.log(this);
        this.props.handleDelete(id);
        console.log(this.props.id);
    }

    render(){
        return(
            <ListItem>
                <Checkbox style={{ display: 'inline-block', width:''}}
                />
                <TextField
                    underlineShow={false}
                    style={ToDoListItemStyle}
                />
                <IconButton onClick={this.handleDelete.bind(this, 0)}>
                    <ContentClear />
                </IconButton>
                <Divider/>
            </ListItem>
        );
    }
}

export default ToDoListItem