import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setApplicationHeader } from '../actions/index';

export default function namedSection(WrappedComponent, sectionName) {
  class NamedSection extends Component {
    static propTypes = {
      setApplicationHeader: PropTypes.func
    };
    componentDidMount() {
      this.props.setApplicationHeader(sectionName);
    }
    componentWillUnmount() {
      this.props.setApplicationHeader('');
    }
    render() {
      return <WrappedComponent {...this.props} sectionName={sectionName}/>;
    }
  }

  return connect(
    null,
    {
      setApplicationHeader
    }
  )(NamedSection);
}
