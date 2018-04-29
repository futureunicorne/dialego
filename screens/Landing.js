import React, { Component } from 'react';
import { ImageBackground } from 'react-native'
import { Container, View, Button, Text, Body, Icon, Image} from 'native-base';
import { Row, Grid } from 'react-native-easy-grid'
import { Actions } from 'react-native-router-flux'


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
                    <Row size={3} style={styles.rowBot}>
                        <View style={styles.container}>
                            <StatusBar
                                barStyle="light-content"
                                backgroundColor="#4F6D7A"
                            />
                            <Text style={{ marginTop: 20, color: '#F5FCFF', fontFamily: 'comic-sans-ms', fontSize: 20}}>
                                Choose an option and
                            </Text>
                            <Text style={{ marginTop: 5, marginBottom: 10, color: '#F5FCFF',  fontFamily: 'comic-sans-ms', fontSize: 20}}>
                                Let's <Text style={{color: '#4F6D7A',  fontFamily: 'comic-sans-ms', fontSize: 20}}>Start </Text>
                            </Text>
                            <Body>
                             <Button rounded light style={styles.buttonPlay} onPress={() => this.props.navigation.navigate('Category')}>
                                 <Icon ios='ios-play' android="md-play" style={{fontSize: 20, color: 'white'}}/>
                                 <Text style={{ color: '#F5FCFF', fontFamily: 'comic-sans-ms',}}>Play</Text>

                             </Button>
                             <Button rounded light style={styles.buttonPlay} onPress={() => this.props.navigation.navigate('Profil')}>
                                 <Icon ios='ios-person' android="md-person" style={{fontSize: 20, color: 'white'}}/>

                                 <Text style={{ color: '#F5FCFF', fontFamily: 'comic-sans-ms'}}>Profile</Text>
                             </Button>
                             <Button rounded light style={styles.buttonPlay} onPress={() => this.props.navigation.navigate('Profil')}>
                                 <Icon ios='ios-book' android="md-bookmarks" style={{fontSize: 20, color: 'white'}}/>
                                 <Text style={{ color: '#F5FCFF', fontFamily: 'comic-sans-ms'}}>Admin</Text>
                             </Button>
                             <Button rounded light style={styles.buttonPlay} onPress={() => this.props.navigation.navigate('Landing')}>
                                 <Icon ios='ios-settings' android="md-settings" style={{fontSize: 20, color: 'white'}}/>
                                 <Text style={{ color: '#F5FCFF', fontFamily: 'comic-sans-ms',}}>Settings</Text>
                             </Button>
                            </Body>
                        </View>
                    </Row>
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
        backgroundColor: '#dfccb1',
    },
    buttonPlay: {
        backgroundColor: '#4F6D7A',
        width: 220,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    }
});