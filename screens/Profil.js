import React, { Component } from 'react';
import { Container, Text, Body, Icon, View} from 'native-base';
import { Image } from 'react-native'
import { connect } from 'react-redux'
import { Avatar }from 'react-native-elements'
import { Row, Grid } from 'react-native-easy-grid'
import { Actions } from 'react-native-router-flux'
import Images from '../assets/img/index'


import {
    StyleSheet,
} from 'react-native'


class Profil extends Component {
    render() {
        return (
            <Container>
                <Grid>
                    <Row size={1} style={styles.rowTop}>
                        <Text style={styles.welcome}>
                            Dialego Profile
                        </Text>
                    </Row>
                    <Row size={3} style={styles.rowBot}>
                        <View style={styles.container}>
                        <Text style={{ marginTop: 20,  marginBottom: 30, color: '#697282', fontFamily: 'comic-sans-ms', fontSize: 40, textAlign: 'center'}}>
                            Your Account
                        </Text>
                        <Body>
                        <Avatar
                            xlarge
                            rounded
                            source={Images.avatar}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                        />
                        <Text style={{ marginTop: 20,  marginBottom: 30, color: '#fff', fontFamily: 'comic-sans-ms', fontSize: 40, textAlign: 'center'}}>
                           Level Score 14 Points
                        </Text>
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

export default connect(null)(Profil)