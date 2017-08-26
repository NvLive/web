import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import namedSection from '../Mixins/namedSection';
import { fetchCurrentBroadcasts } from '../actions/index';

class CurrentStream extends Component {

  static propTypes = {
    data: PropTypes.object,
    fetchCurrentBroadcasts: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchCurrentBroadcasts();
  }

  render() {
    const {
      data
    } = this.props;

    return (
      <div>
        {[...(data.broadcasts || [])].map( (kv) => {
          const broadcast = kv[1];
          return(
            <div key={kv[0]}>
              {broadcast.placeholder_image_url && <img src={broadcast.placeholder_image_url} alt=""/>}
              {broadcast.title}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  {
    fetchCurrentBroadcasts
  }
)(namedSection(CurrentStream, 'Прямой эфир'));
