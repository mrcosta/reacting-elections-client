import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';
import * as actionCreators from '../action_creators';

export const Voting = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    hasVoted: state.get('hasVoted'),
    winner: state.get('winner')
  };
}

// Voting remains a pure, unconnected component. Instead, connect returns a connected version of Voting.
export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
)(Voting);

// The module now exports two components: The pure component Voting and the connected component VotingContainer. The react-redux documentation calls the former a "dumb" component and the latter a "smart" component. I prefer "pure" and "connected". Call them what you will, understanding the difference is key:

// The pure/dumb component is fully driven by the props it is given. It is the component equivalent of a pure function.
// The connected/smart component, on the other hand, wraps the pure version with some logic that will keep it in sync with the changing state of the Redux Store. That logic is provided by react-redux.
