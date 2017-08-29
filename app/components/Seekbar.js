import React, { Component } from 'react';
import propTypes from 'prop-types';
import JPlayer, {
  connect,
  Gui,
  SeekBar,
  PlayBar
} from 'react-jplayer';
import { Player } from './Player';

export class MainSeekBar extends Component {

  static propTypes = {
    clearMedia: propTypes.func,
    data: propTypes.object,
    focus: propTypes.func,
    id: propTypes.string,
    jPlayers: propTypes.object,
    pause: propTypes.func,
    play: propTypes.func,
    routing: propTypes.object,
    setMedia: propTypes.func,
    setMute: propTypes.func,
    setOption: propTypes.func,
    setPlayHead: propTypes.func,
    setVolume: propTypes.func,
  };

  static contextTypes = {
    muiTheme: propTypes.object,
  };

  render() {
    return(
      <JPlayer className="jp-sleek">
        <Gui>
          <div className="jp-controls jp-icon-controls">
            <div className="jp-progress">
              <SeekBar>
                <PlayBar/>
              </SeekBar>
            </div>
          </div>
        </Gui>
      </JPlayer>
    );
  }
}

const options = {
  id: Player.DEFAULT_ID,
};

export default connect(MainSeekBar, options);
