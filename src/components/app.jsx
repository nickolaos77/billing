import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '' };
    // this.clickHandler = this.clickHandler.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.renderUsers = this.renderUsers.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  handleNameInput(event) {
    this.setState({
      name: event.target.value,
    }, console.log(this.setState));
  }

  renderUsers() {
    return this.props.users.map(user=> <option key={user.id} value={user.username}></option> )
  }

  render() {
    return (
      <div className="app">
        <input
          className=""
          type="text"
          placeholder="user"
          value={this.state.name}
          onChange={this.handleNameInput}
        />
        <form>
          <fieldset>
            <p>
              <label>Select list</label>
              <select id = "myList">
              {this.renderUsers()}
              </select>
            </p>
          </fieldset>
        </form>

      </div>
    );
  }
}

export default connect(state => ({
  users: state.users,
}))(App);
