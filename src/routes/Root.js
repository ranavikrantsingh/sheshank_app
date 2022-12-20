// import React, {Component, useEffect} from 'react';
// import {connect} from 'react-redux';
// import Routes from './Routes';
// import LoginRoutes from './LoginRoutes';
// import {setDeviceId} from '../store/actions';

// class Root extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       deviceInfo: {},
//       isFetchingApiUrl: false,
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {}

//   render() {
//     if (this.props.isAuthenticated) {
//       return <Routes />;
//     } else {
//       return <LoginRoutes />;
//     }
//   }
// }

// const mapStateToProps = state => ({
//   deviceId: state.appReducer.deviceId,
//   isAuthenticated: state.appReducer.isAuthenticated,
// });

// const mapDispatchToProps = dispatch => ({
//   setDeviceId: deviceId => {
//     dispatch(setDeviceId(deviceId));
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Root);

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import Routes from './Routes';
import LoginRoutes from './LoginRoutes';
const Root = props => {
  if (props.isAuthenticated) {
    return <Routes />;
  } else {
    return <LoginRoutes />;
  }
};
const mapStateToProps = state => ({
  isAuthenticated: state.appReducer.isAuthenticated,
});

export default connect(mapStateToProps)(Root);
