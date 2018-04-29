import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { white, gray } from '../utils/colors'
import { Actions } from 'react-native-router-flux'


class DeckListItem extends Component {

    render() {
        const { title, questions, navigation } = this.props;
        const decks = this.props.decks[title];
        return (
            <View style={styles.listItem}>
                <TouchableOpacity
                    style = {styles.buttonPlay}
                    onPress={() => navigation.navigate('Quizz', { decks })} >
                    <Text style={styles.deckTitle}>{ title }</Text>
                    <Text style={styles.numOfCards}>{ `${questions.length} questions` }</Text>

                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4F6D7A',
        borderRadius: 4,
        borderWidth: 1,
        marginTop: 15,
        borderColor: white,
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    deckTitle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
    numOfCards: {
        fontSize: 14,
        fontWeight: 'bold',
        color: white
    },
    buttonPlay: {
        width: 220,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

function mapStateToProps({ decks }){
    return { decks }
}

export default connect(mapStateToProps, null)(DeckListItem)
