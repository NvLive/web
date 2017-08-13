import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchBroadcasts } from '../actions/index';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';

class BroadcastsList extends Component {

  static propTypes = {
    data: PropTypes.object,
    fetchBroadcasts: PropTypes.func,
    filter: PropTypes.object,
  };

  componentDidMount() {
    this.props.fetchBroadcasts(this.props.filter);
  }

  render() {
    const {
      data
    } = this.props;

    return (
      <div>
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
                >
                  {broadcast.placeholder_image_url && <img src={broadcast.placeholder_image_url} alt=""/>}
                </GridTile>
              );
            })}
          </GridList>
        </div>
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
    fetchBroadcasts
  }
)(BroadcastsList);
