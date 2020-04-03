import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
  state = {
    showGamesPlayed: true,
  };

  toggleGamesPlayedPanel = () => {
    this.setState(oldState => ({
      showGamesPlayed: !oldState.showGamesPlayed,
    }));
  };

  isDisabled = () => {
    if (this.props.users.length === 0) {
        return true 
    } else {
      return false 
    }  
};


  render() {
    const { showGamesPlayed } = this.state;
    const { users } = this.props;

    //JSX for the button that toggles showing and hiding the players' score.
    const gamesPlayedButton = (
      <div>
        <button className="smallButton" onClick={this.toggleGamesPlayedPanel}>
          {showGamesPlayed ? 'Hide ' : 'Show '}
          the Number of Games Played
        </button>
      </div>
    );

    return (
      <div>
        <h1>Users</h1>
        {users && users.length > 0 ? gamesPlayedButton : ""}
        <ol>
          {users.map(user => (
            <User
              key={user.username}
              user={user}
              showGamesPlayed={showGamesPlayed}
              handleDeleteUser={this.props.handleDeleteUser}
            />
          ))}
        </ol>
        <button
          className="button smallButton"
          onClick={this.props.handleDeleteUsers}
          disabled={this.isDisabled()}
        >
          Remove all
        </button>
        {this.props.users.length === 0 && (
          <p>Please create a user to get started</p>
        )}
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
