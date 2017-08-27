import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-jplayer';

import namedSection from '../Mixins/namedSection';
import { Player } from '../components/Player';
import { fetchCurrentBroadcasts } from '../actions/index';

import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';


class CurrentStream extends Component {

  static propTypes = {
    data: PropTypes.object,
    fetchCurrentBroadcasts: PropTypes.func,
    setMedia: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchCurrentBroadcasts();
  }

  render() {
    const {
      data,
      setMedia
    } = this.props;

    return (
      <div style={{width: '400px', margin: '0 auto'}}>
        <GridList
          cols={1}
          cellHeight={150}
          padding={1}
        >
        {[...(data.broadcasts || [])].map( (kv) => {
          const broadcast = kv[1];
          return(
            <GridTile
              key={broadcast.id}
              title={broadcast.title}
              actionIcon={<IconButton/>}
              actionPosition="left"
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={1}
              rows={2}
              subtitle={broadcast.description}
              onClick={() => {
                setMedia(
                  Player.DEFAULT_ID,
                  {
                    title: broadcast.title,
                    sources: {
                      mp3: broadcast.stream_url,
                    },
                  });
              }}
            >
              {broadcast.placeholder_image_url && <img src={broadcast.placeholder_image_url} alt=""/>}
              {broadcast.title}
            </GridTile>
          );
        })}
        </GridList>
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
    fetchCurrentBroadcasts,
    setMedia: actions.setMedia
  }
)(namedSection(CurrentStream, 'Прямой эфир'));
