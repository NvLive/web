import React, { Component } from 'react';
import propTypes from 'prop-types';
import JPlayer, {
  connect,
  Gui,
  SeekBar,
  Audio,
  Title,
  Mute,
  Play,
  VolumeBar,
  Duration,
  CurrentTime,
  BrowserUnsupported,
} from 'react-jplayer';

import FontIcon from 'material-ui/FontIcon';

export class Player extends Component {
  static DEFAULT_ID = 'jplayer';

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

  render() {
    const {
      jPlayers
    } = this.props;

    const message = Object.keys(jPlayers[Player.DEFAULT_ID].media.sources).length !== 0
      ? <BrowserUnsupported />
      : <span>Выберите запись или стрим</span>;

    return(
      <JPlayer className="jp-sleek">
        <Audio />
        <Gui>
          <div className="jp-controls jp-icon-controls">
            <Play>
              <FontIcon style={{fontSize: '42px'}} className="material-icons">play_arrow</FontIcon>
            </Play>
            <div className="jp-progress">
              <SeekBar>
                <CurrentTime />
                <Duration />
              </SeekBar>
            </div>
            <div className="jp-volume-container">
              <Mute>
                <FontIcon style={{fontSize: '42px'}} className="material-icons">volume_mute</FontIcon>
              </Mute>
              <div className="jp-volume-slider">
                <div className="jp-volume-bar-container">
                  <VolumeBar />
                </div>
              </div>
            </div>
            <div className="jp-title-container">
              <Title />
            </div>
          </div>
          <message/>
        </Gui>
      </JPlayer>
    );
  }
}

const options = {
  id: Player.DEFAULT_ID,
  keyEnabled: true,
  verticalVolume: true,
  media: undefined,
};

export default connect(Player, options);
