import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
   render() {
      return (
         <Provider store={store}>
            <Router>
               <div className="App">
                  <div id="route-container">
                     {/* <Route path="/" exact component={SomeComponent} /> */}
                     <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                           Template Typescript React App w/ Redux.
                        </p>
                     </header>
                  </div>
               </div>
            </Router>
         </Provider>
      );
   }
}
export default App;
