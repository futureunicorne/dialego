import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base'
import Landing from "./screens/Landing";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Expo from 'expo'

export default class App extends React.Component {
    state={
        isReady: false,
    };
    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'comic-sans-ms': require('./assets/fonts/comic-sans-ms.ttf')
        });


        this.setState({isReady:true});

    }
  render() {

      if (!this.state.isReady) {
          return <Expo.AppLoading />;
      }
    return (
        <Container style={styles.header}>
          <Landing />
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    header: {
        paddingTop: getStatusBarHeight(),
        height: 54 + getStatusBarHeight(),
    }
});
