import React from "react";
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'; // Import your Home component
import Review from './review'; // Import your Review component
import About from "./About";
import Contact from "./Contact";
import Transport from "./Transport";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} /> {/* Home page */}
        <Route path="/review" component={Review} /> {/* Review page */}
        <Route path="/About" component={About} /> {/* About page */}
        <Route path="/Contact" component={Contact} /> {/* Contact page */}
        <Route path="/transport" component={Transport} />
      </Switch>
    </Router>
  );
}

export default App;
