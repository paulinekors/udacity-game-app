import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
  return (
  	<li class="user">
   		<p>Username: {props.user.username}</p>
       	<p>Number of Games Played: {props.showGamesPlayed ? props.user.numGamesPlayed : '*'}</p>
        <button
        className="button smallButton"
          onClick={e => {
            props.handleDeleteUser(props.user);
          }}
        >
          Remove
        </button>
  	</li>
    );
};

User.propTypes = {
  showGamesPlayed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default User;

