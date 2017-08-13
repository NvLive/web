import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchShows } from '../actions/index';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';

class ShowsList extends Component {

  static propTypes = {
    data: PropTypes.object,
    fetchShows: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchShows();
  }

  render() {
    const {
      data
    } = this.props;

    return (
      <div style={{width: '400px', margin: '0 auto'}}>
        <GridList
          cols={1}
          cellHeight={150}
          padding={1}
        >
          {[...(data.shows || [])].map( (kv) => {
            const show = kv[1];
            return(
              <GridTile
                key={show.id}
                title={show.title}
                actionIcon={<IconButton/>}
                actionPosition="left"
                titlePosition="top"
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                cols={1}
                rows={2}
                subtitle={show.description}
              >
                <Link to={/shows/ + show.id}>
                  {show.placeholder_image_url && <img src={show.placeholder_image_url} alt=""/>}
                </Link>
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
    fetchShows
  }
)(ShowsList);
