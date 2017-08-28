import React, { Component } from 'react';
import { connect } from 'react-redux';
import createDaysArrayUtil from '../helpers/';

import { fetchUsers, showCurrentMonth, daysArrayAG } from '../actions/index';
import ListOfUsers from './listOfUsers';
import Calendar from './calendar';
import Buttons from './buttons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '' };
    // this.clickHandler = this.clickHandler.bind(this);
    this.createDaysArray = this.createDaysArray.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(daysArrayAG(this.createDaysArray()));
    this.props.dispatch(fetchUsers());
    this.props.dispatch(showCurrentMonth());
  }

  createDaysArray() {
    return createDaysArrayUtil();
  }

  render() {
    return (
      <div className="column app">
        <header className="row header" >
          <form>
            <fieldset>
              <div className="row" >
                <label><h3 className="textColor centered" style={{ marginRight: 30 }}>Select user:  </h3></label>
                <ListOfUsers />
              </div>
            </fieldset>
          </form>
        </header>
        <section className="column section">
          <Calendar />
          <Buttons />
        </section>
      </div>
    );
  }
}

export default connect()(App);
