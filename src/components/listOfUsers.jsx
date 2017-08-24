import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUserData } from '../actions/index';

class ListOfUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.renderUsers = this.renderUsers.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.dispatch(fetchUserData(e.target.value));
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  }

  renderUsers() {
    if (this.props.users.length > 0) {
      return this.props.users.map(user =>
        <option value={user.id} key={user.id}>{user.username}</option>
      );
    }
    return <option>fetching users...</option>;
  }

  render() {
    return (
      <select id="myList" onChange={this.onChange} value={this.state.value}>
        {this.renderUsers()}
      </select>
    );
  }
}

export default connect(state => ({ users: state.users }))(ListOfUsers);