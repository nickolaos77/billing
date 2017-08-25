import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers, showCurrentMonth } from '../actions/index';
import ListOfUsers from './listOfUsers';
import Calendar from './calendar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '' };
    // this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers());
    this.props.dispatch(showCurrentMonth());
  }

  render() {
    return (
      <div className="column">
        <form>
          <fieldset>
            <div className='row'>
              <label><h3 className="textColor" style={{ marginRight: 30 }}>Select user:  </h3></label>
              <ListOfUsers />
            </div>
          </fieldset>
        </form>
        <Calendar />
      </div>
    );
  }
}

export default connect()(App);
