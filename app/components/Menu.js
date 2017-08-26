import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Player from './Player';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';

class Menu extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  static propTypes = {
    headerText: PropTypes.string
  };

  toggleOpen = () => this.setState({open: !this.state.open});

  render() {
    const {
      headerText = ''
    } = this.props;

    return (
      <div style={{height: '64px'}}>
        <AppBar
          style={{position: 'fixed', top: 0, width: '100%'}}
          title={headerText + ' Навальный Live'}
          showMenuIconButton
          onLeftIconButtonTouchTap={() => this.setState({open: true})}
        />
        <Player/>
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <Link to="/"><MenuItem onTouchTap={this.toggleOpen}>Прямой эфир</MenuItem></Link>
          <Link to="/shows"><MenuItem onTouchTap={this.toggleOpen}>Программы</MenuItem></Link>
          <Link to="/broadcasts"><MenuItem onTouchTap={this.toggleOpen}>Записи</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      headerText: state.applicationHeader
    };
  }
)(Menu);

