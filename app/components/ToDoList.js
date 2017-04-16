import React from 'react'
import List from 'material-ui/List/List'
import ToDoListItem from './ToDoListItem'


import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';


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
        currentInputValue:'',
        checkAll: false,
        filter: 'all'
        }
    }

    addItem(e){
        e.preventDefault();
        this.state.items.push({value:this.state.currentInputValue, completed:false});
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

    updateCompleted(id){
        this.state.items[id].completed = !this.state.items[id].completed
        this.setState({items:this.state.items})
    }

    handleCheckAll(){
        this.state.items = this.state.items.map((item) => {
            item.completed = !this.state.checkAll;
            return item
        })
        this.setState({checkAll: !this.state.checkAll, items: this.state.items})
        
        
    }

    setFilter(filter){
        this.state.filter = filter;
        this.setState({filter:this.state.filter});
    }


    filter(item, filter){
        if(filter === 'active' && !item.completed){
            return true;
        }
        else if(filter === 'completed' && item.completed){
            return true;
        }
        else if(filter === 'all'){
            return true;
        }
        else{
            return false;
        }
    }
    

    render(){
        return(
            <Paper zDepth={2} style={ToDoListStyle}>
                <Checkbox
                    style={{ display: 'inline-block', width:''}}
                    checked={this.state.checkAll}
                    onCheck={(e) => this.handleCheckAll()}
                />
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
                        this.state.items.filter((item, index) => {return this.filter(item, this.state.filter)}).map((item, index) => {
                            return <ToDoListItem value={item.value} handleDelete={(e) => this.deleteItem(e)} key={index} id={index} checked={item.completed} handleChecked={(e) => this.updateCompleted(e)}/>
                        })
                    }
                </List>
                <RaisedButton onClick={(e) => this.setFilter('all')} label="All"/>
                <RaisedButton onClick={(e) => this.setFilter('active')} label="Active"/>
                <RaisedButton onClick={(e) => this.setFilter('completed')} label="Completed"/>
            </Paper>
            
      );
  }
}

export default ToDoList