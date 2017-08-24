import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/index';
import ListOfUsers from './listOfUsers';
import Calendar from './calendar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '' };
    // this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    return (
      <div className="app">
        <form>
          <fieldset>
            <p>
              <label>Select list</label>
              <ListOfUsers />
            </p>
          </fieldset>
        </form>
        <Calendar/>
      </div>
    );
  }
}

export default connect()(App);
