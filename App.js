import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Landing from "./screens/Landing";
import Category from "./screens/Category";
import Quizz from "./screens/Quizz"
import Profil from "./screens/Profil"
import Validate  from "./screens/Validate"
import { StackNavigator } from 'react-navigation'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Expo from 'expo'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(logger),
        applyMiddleware(thunk)
    )
)


const Stack = StackNavigator({
    Landing: {
        screen: Landing
    },
    Category: {
        screen: Category
    },
    Quizz:{
        screen:Quizz
    },
    Profil:{
        screen:Profil
    },
        Validate:{
            screen:Validate
        }
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

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
        <Provider store={store}>
            <Stack/>
        </Provider>
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
