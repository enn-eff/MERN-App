import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import Users from './user/pages/User';
import Places from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
    return (
        <Router>
            <MainNavigation />
            <main>
                <Switch>
                    <Route exact path='/' component={Users} />
                    <Route exact path='/places/new' component={Places} />
                    <Redirect to='/' />
                </Switch>
            </main>
        </Router>
    );
}

// class App extends React.Component {
//   render () {
//     return React.createElement('code', null, 'hi this is uzair ch'
//     )
//   };

// }
export default App;

// React.createElement()

// <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
