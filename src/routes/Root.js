import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import Routes from './Routes';
import LoginRoutes from './LoginRoutes';
const Root = props => {
  if (props?.isAuthenticated) {
    return <Routes />;
  } else {
    return <LoginRoutes />;
  }
};
const mapStateToProps = state => ({
  isAuthenticated: state.appReducer.isAuthenticated,
});

export default connect(mapStateToProps)(Root);
