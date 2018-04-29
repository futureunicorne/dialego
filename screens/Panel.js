import React, { Component } from 'react';
import { Container, View, Button, Text, Body, Icon, Image} from 'native-base';
import { Row, Grid } from 'react-native-easy-grid'

import {
    Platform,
    StyleSheet,
    StatusBar,
} from 'react-native'


export default class Panel extends Component {
    render() {
        return (
            <Container>
                <Grid>
                    <Row size={1} style={styles.rowTop}>
                        <Text style={styles.welcome}>
                            What others players answered
                        </Text>
                    </Row>
                    <Row size={3} style={styles.rowBot}>
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