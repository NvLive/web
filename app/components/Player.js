import React from 'react';
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

const Player = () => (
  <JPlayer className="jp-sleek">
    <Audio />
    <Gui>
      <div className="jp-controls jp-icon-controls">
        <Play>
          <FontIcon>play</FontIcon>
        </Play>
        <div className="jp-progress">
          <SeekBar>
            <CurrentTime />
            <Duration />
          </SeekBar>
        </div>
        <div className="jp-volume-container">
          <Mute>
            <FontIcon>mute</FontIcon>
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
      <BrowserUnsupported />
    </Gui>
  </JPlayer>
);

const options = {
  id: 'jplayer',
  keyEnabled: true,
  verticalVolume: true,
  media: null,
};

export default connect(Player, options);
