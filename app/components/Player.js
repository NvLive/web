import React, { Component } from 'react';
import propTypes from 'prop-types';
import JPlayer, {
  connect,
  Gui,
  Audio,
  Title,
  Mute,
  Play,
  VolumeBar,
  BrowserUnsupported,
  CurrentTime
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

  static contextTypes = {
    muiTheme: propTypes.object,
  };

  render() {
    const {
      jPlayers
    } = this.props;

    const player = jPlayers[Player.DEFAULT_ID];

    const message = Object.keys(player.media.sources).length !== 0
      ? <BrowserUnsupported />
      : <span>Выберите запись или стрим</span>;

    const volumeIcon = player.muted
      ? <FontIcon color={'white'} style={{fontSize: '42px'}} className="material-icons">volume_off</FontIcon>
      : <FontIcon color={'white'} style={{fontSize: '42px'}} className="material-icons">volume_up</FontIcon>;

    const playIcon = player.paused
      ? <FontIcon color={'white'} style={{fontSize: '42px'}} className="material-icons">play_arrow</FontIcon>
      : <FontIcon color={'white'} style={{fontSize: '42px'}} className="material-icons">pause</FontIcon>;

    return(
      <JPlayer className="">
        <Audio />
        <Gui>
          <div className="jp-controls jp-icon-controls">
            <span>
              <CurrentTime />
            </span>
            <Play>
              {playIcon}
            </Play>
            <span className="jp-volume-container">
              <Mute>
                {volumeIcon}
              </Mute>
              <div className="jp-volume-slider">
                <div className="jp-volume-bar-container">
                  <VolumeBar />
                </div>
              </div>
            </span>
            <span className="jp-title-container">
              <Title />
            </span>
          </div>
          {message}
        </Gui>
      </JPlayer>
    );
  }
}

const options = {
  id: Player.DEFAULT_ID,
  keyEnabled: true,
  verticalVolume: true,
  media: {
    title: 'radio',
    sources: {
      mp3: 'http://streaming307.radionomy.com:80/Jazzandloungestation'
    }
  },
};

export default connect(Player, options);
