import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from '../assets/tnff-logo.png';
// import reversedlogo from '../assets/tnff-logo-reversed.png';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import FAQ from './FAQ';
import Footer from './Footer';

import { colors } from '../utils/colors';

const logoStyles = {
  width: '50%',
  display: 'block',
  margin: '40px auto',
};

const headerStyles = {
  background: `linear-gradient(-140deg, ${colors.lightgrey}, ${colors.grey})`,
  padding: '20px',
};

const App = () => (
  <Router>
    <div className="App">
      <header style={headerStyles} className="App-header">
        <img src={logo} style={logoStyles} className="App-logo" alt="logo" />
      </header>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faq" component={FAQ} />
        <Route path="*" component={About} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
