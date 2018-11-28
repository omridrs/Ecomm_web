import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactUsPage from './ContactUsPage';
import NavBar from './HeaderComponent/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="about" exact path="/about" component={AboutPage} />
          <Route name="contactUs" exact path="/contactUs" component={ContactUsPage} />
        </div>
      </Router>
    )
  }
}

export default App;
