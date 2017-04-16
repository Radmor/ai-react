import React from 'react'
import List from 'material-ui/List/List'
import ToDoListItem from './ToDoListItem'


import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'


const ToDoListStyle = {
  width: '50%',
  textAlign: 'center'
};

const TextInputStyle ={
    width:'90%'
}

class ToDoList extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
        sideNavOpen: false,
        modalOpen: false,
        items:[],
        currentInputValue:''
        }
    }

    addItem(e){
        e.preventDefault();
        this.state.items.push({value:this.state.currentInputValue, active:false});
        this.setState({currentInputValue:''});
        this.setState({state:this.state});
    }

    deleteItem(id){
        this.state.items.splice(id, 1);
        this.setState({items:this.state.items});
    }

    updateInputValue(e){
        this.setState({currentInputValue:e.target.value})
    }

    updateActive(id){
        this.state.items[id].active = !this.state.items[id].active
        this.setState({items:this.state.items})
    }

    render(){
        return(
            <Paper zDepth={2} style={ToDoListStyle}>
                <form onSubmit={(e) => this.addItem(e)}>
                    <TextField 
                        underlineShow={false}
                        style={TextInputStyle}
                        value={this.state.currentInputValue}
                        onChange={(e) => this.updateInputValue(e)}
                    />
                </form>
                <Divider/>
                <List>
                    {
                        this.state.items.map((item, index) => {
                            return <ToDoListItem value={item.value} handleDelete={(e) => this.deleteItem(e)} key={index} id={index} checked={item.active} handleChecked={(e) => this.updateActive(e)}/>
                        })
                    }
                    </List>
            </Paper>
            
      );
  }
}

export default ToDoList