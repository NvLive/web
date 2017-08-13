import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Player extends PureComponent {

  static propTypes = {
    streamUrl: PropTypes.string,
    autoPlay: PropTypes.bool,
  };

  render() {
    const {
      streamUrl,
      autoPlay = false
    } = this.props;

    return (
      <div>
        <audio src={streamUrl} autoPlay={autoPlay} ref=""></audio>
      </div>
    );
  }
}

export default Player;
