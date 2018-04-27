import React, { Component } from 'react';
import { ImageBackground } from 'react-native'
import { Container, View, Button, Text, Body, Icon, Image} from 'native-base';
import { Row, Grid } from 'react-native-easy-grid'

import {
    Platform,
    StyleSheet,
    StatusBar,
} from 'react-native'



const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Landing extends Component {
    render() {
        return (
            <Container>
                <Grid>
                    <Row size={1} style={styles.rowTop}>
                        <Text style={styles.welcome}>
                            Welcome to Dialego
                        </Text>
                    </Row>
                    <ImageBackground
                        source={'../assets/img/plume.png'}
                        style={{width: '100%', height: '100%'}}
                    >
                    <Row size={3} style={styles.rowBot}>
                        <View style={styles.container}>
                            <StatusBar
                                barStyle="light-content"
                                backgroundColor="#4F6D7A"
                            />
                            <Text style={{ marginTop: 20}}>
                                Choose an option and
                            </Text>
                            <Text style={{ marginTop: 5, marginBottom: 5}}>
                                Let's Start
                            </Text>
                            <Body>
                             <Button rounded light style={styles.buttonPlay}>
                                 <Icon ios='ios-play' android="md-play" style={{fontSize: 20, color: 'white'}}/>
                                 <Text style={{ color: '#F5FCFF', fontFamily: 'comic-sans-ms',}}>Play</Text>

                             </Button>
                             <Button rounded light style={styles.buttonPlay}>
                                 <Icon ios='ios-person' android="md-person" style={{fontSize: 20, color: 'white'}}/>

                                 <Text style={{ color: '#F5FCFF', fontFamily: 'comic-sans-ms'}}>Profile</Text>
                             </Button>
                             <Button rounded light style={styles.buttonPlay}>
                                 <Icon ios='ios-book' android="md-bookmarks" style={{fontSize: 20, color: 'white'}}/>
                                 <Text style={{ color: '#F5FCFF', fontFamily: 'comic-sans-ms'}}>Learn</Text>
                             </Button>
                             <Button rounded light style={styles.buttonPlay}>
                                 <Icon ios='ios-settings' android="md-settings" style={{fontSize: 20, color: 'white'}}/>
                                 <Text style={{ color: '#F5FCFF', fontFamily: 'comic-sans-ms',}}>Settings</Text>
                             </Button>
                            </Body>
                        </View>
                    </Row>
                    </ImageBackground>
                </Grid>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        fontFamily: 'comic-sans-ms',
        fontSize: 30,
        color: '#F5FCFF',
    },
    instructions: {
        color: '#4F6D7A',
        marginBottom: 5,
    },
    rowTop: {
        backgroundColor: '#4F6D7A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowBot: {
        backgroundColor: '#F5FCFF',
    },
    buttonPlay: {
        backgroundColor: '#4F6D7A',
        width: 220,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    }
});