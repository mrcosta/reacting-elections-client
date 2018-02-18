import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  getPair: function() {
    return this.props.pair || [];
  },
  isDisabled: function() {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry;
  },
  render: function() {
    return <div className="voting">
      {this.getPair().map(entry =>
        <button key={entry}
                disabled={this.isDisabled()}
                onClick={() => this.props.vote(entry)}>
          <h1>{entry}</h1>
          {this.hasVotedFor(entry) ?
            <div className="label">Voted</div> :
            null}
        </button>
      )}
    </div>;
  }
});

// The user clicks a vote button. A VOTE action is dispatched.
// The remote action middleware sends the action over the Socket.io connection.
// The client-side Redux store handles the action, causing the local hasVote state to be set.
// When the message arrives on the server, the serverside Redux store handles the action, updating the vote in the tally.
// The listener on the serverside Redux store broadcasts a state snapshot to all connected clients.
// A SET_STATE action is dispatched to the Redux store of every connected client.
// The Redux store of every connected client handles the SET_STATE action with the updated state from the server.
