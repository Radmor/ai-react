import React from 'react'
import ReactDOM from 'react-dom';
import ToDoListContainer from './components/ToDoListContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../public/styles/main.scss';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <ToDoListContainer/>
      </MuiThemeProvider>
    );
  }
}



ReactDOM.render(<App/>, document.querySelector('#app'));
