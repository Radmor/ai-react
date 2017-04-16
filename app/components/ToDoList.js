import React from 'react'
import List from 'material-ui/List/List'
import ToDoListItem from './ToDoListItem'

class ToDoList extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
        sideNavOpen: false,
        modalOpen: false,
        items:['here', 'dupa']
        }
    }

    addItem(value){
        this.state.items.push(value)
    }

    deleteItem(id){
        this.state.items.splice(id, 1);
        this.setState({items:this.state.items})
    }

  render(){
      return(
            <List>
                {
                    this.state.items.map((item, index) => {
                        return <ToDoListItem defaultValue='item' handleDelete={(e) => this.deleteItem(e)} id={index} />
                    })
                }
            </List>
      );
  }
}

export default ToDoList