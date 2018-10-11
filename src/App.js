import React, { Component } from 'react';
import BakeryNav from './Nav/Nav.jsx';
import Landing from './Landing/Landing.jsx';
import Contact from './Contact/Contact.jsx';
import Shop from './Shop/Shop.jsx';

class App extends Component {
  /**
   * constructor - build class App
   *
   * super calls the parent class "Component"
   * and tells it to add extended values to this component.
   * Enabling prototypical methods such as React Lifestyle Fns
   * and state management Fns ie this.setState()
   */
  constructor(props) {
    super(props);
    this.state = {
      view: 'home'
    }
  }

  /**
   * handleSelect - event handler for nav selection
   *
   * This function sets the state for what view to render.
   * Default is set to "home", thus why homepage is what we
   * first when going to http://localhost:300.
   *
   * When we click a nav option, the event key is passed
   *
   */
  handleSelect = (key) => {
    this.setState({
      view: key
    })
  }

  render() {
    return (
      <div className="App">
        <BakeryNav selectProp={this.handleSelect} view={this.state.view}/>
        <div style={{marginTop: "90px"}}>
          {this.state.view === 'home' &&
            <Landing />
          }
          {this.state.view === 'shop' &&
            <Shop />
          }
          {this.state.view === 'contact' &&
            <Contact/>
          }
        </div>
      </div>
    );
  }
}

export default App;
