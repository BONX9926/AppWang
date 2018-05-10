import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Splash from './components/Splash'
import Main from './components/Main'
class App extends Component {
    constructor(props){
        super(props);
        this.state = { currentScreen: 'Splash' };
        setTimeout(() => {
            this.setState({ currentScreen: 'Main'})
        }, 4000);
    }
    
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Main/>
        return mainScreen
    }
}
AppRegistry.registerComponent('AppWang', () => App);
