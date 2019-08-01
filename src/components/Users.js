import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    const data = this.props;
    const {users, numberOfUSers} = data;
    console.log(data, users, numberOfUSers);

    return (
      <div>
        <br/>
        {numberOfUSers}
        <br/>
        <ul>
          {users.map((user, index) => <li key={index}>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users, 
    numberOfUSers: state.users.length
  };
};

export default connect(
  mapStateToProps
)(Users)
