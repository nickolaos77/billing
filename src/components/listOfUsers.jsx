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
    if (e.target.value !== 'username') {
      this.props.dispatch(fetchUserData(e.target.value, this.props.month.monthNum + 1));
      this.setState({ value: e.target.value });
    } else if (e.target.value === 'username') {
      this.props.dispatch(fetchUserData());
      this.setState({ value: e.target.value });
    }
  }

  renderUsers() {
    if (this.props.users.length > 0) {
      const users = [];
      users.push(<option value="username" key="username">username</option>)
      this.props.users.forEach(user => users.push(
        <option value={user.id} key={user.id}>{user.username}</option>)
      );
      return users;
    }
    return <option>fetching users...</option>;
  }

  render() {
    return (
      <select onChange={this.onChange} value={this.state.value}>
        {this.renderUsers()}
      </select>
    );
  }
}

export default connect(state => ({
  users: state.users,
  month: state.month,
}))(ListOfUsers);
