import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';
import UserList from './UserList';

class App extends Component {
  state = {
    users: [],
  };

  createContact = user => {
    user.numGamesPlayed = 0;
    this.setState(currState => ({
      users: [...currState.users, user],
    }));
  };

  handleDeleteUser = (userToRemove) => {
    this.setState((currState) => ({
      users: currState.users.filter((user) => userToRemove !== user)
    }));
  };

  handleDeleteUsers = () => {
    this.setState(() => ({ users: [] }));
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser 
          users={this.state.users} 
          onAddUser={this.createContact} 
        />
        <UserList 
          users={this.state.users}
          handleDeleteUser={this.handleDeleteUser} 
          handleDeleteUsers={this.handleDeleteUsers}
        />
      </div>
    );
  }
}

export default App; 
