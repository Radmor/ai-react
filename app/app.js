import React from 'react';
import ReactDOM from 'react-dom';

import '../public/styles/main.scss';

class App extends React.Component {
  render() {
    return (
      <p>DevCollege React!</p>
    );
  }
}


ReactDOM.render(<App/>, document.querySelector('#app'));
