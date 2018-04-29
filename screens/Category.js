import React, {Component} from 'React'
import {FlatList, StyleSheet} from 'react-native'
import DeckListItem from './DeckListItem'
import { Container, View, Text} from 'native-base'
import { Row, Grid } from 'react-native-easy-grid'
import { getDecksData }  from '../utils/decks'
import {connect} from 'react-redux'
import { saveDeckTitle } from '../actions'
import { getDecks, addCardToDeck } from '../actions'

class DeckList extends Component{

    state = {
        question:'',
        answer:''
    }
    componentDidMount = () => {
    // title = ["Buisness", "Technology", "Environment", "Health"];
    //     this.props.saveDeckTitle(title[2]);
    //
    //         const anglais = ["care","surgery","a blood test"];
    //         const arabe = ["رعاية\n","العملية الجراحية\n","اختبار الدم\n"];
    //         const {question, answer} = this.state;
    //         const quizzCard = {question, answer};
    //         quizzCard.question = anglais[2];
    //         quizzCard.answer = arabe[2];
    //         if (quizzCard.question !== '' && quizzCard.answer !== '') {
    //             this.props.addCardToDeck(title[3], quizzCard);
    //
    //         }
        this.props.getDecks();
    };

    renderItem = ({ item }) =>{
        return <DeckListItem  {...item } navigation={this.props.navigation}/>
    }

    render(){
        const decks = this.props.decks;
        console.debug(this.props.decks);
        const decksData = Object.keys(decks).map(key => decks[key])
        return (
            <Container>
            <Grid>
                <Row size={1} style={styles.rowTop}>
                    <Text style={styles.welcome}>
                        Choose a Category
                    </Text>
                </Row>
                <Row size={3} style={styles.rowBot}>
                    <View>
                        <FlatList
                            style={styles.buttonPlay}
                            data ={decksData}
                            renderItem = {this.renderItem}
                            keyExtractor  ={(item , index ) => index}
                        />
                    </View>
                </Row>
            </Grid>
        </Container>
        )
    }
}

const styles = StyleSheet.create({
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPlay: {
        marginTop: 25,
    },

})

function mapStateToProps({ decks})
{
    return { decks }
}


// function defStor () {
//     title = ["Buisness", "Technology", "Environment", "Health"];
//     for (var i = 0; 4 < 1; i++) {
//         if (title !== '') {
//             saveDeckTitle(title[i]);
//             this.setState({title: ''})
//         }
//     }
//     for (var i = 0; i < 3; i++) {
//         const anglais = ["care","surgery","a blood test"];
//         const arabe = ["رعاية\n","العملية الجراحية\n","اختبار الدم\n"];
//         const {question, answer} = this.state;
//         const quizzCard = {question, answer};
//         quizzCard.question = anglais[i];
//         quizzCard.answer = arabe[i];
//         if (quizzCard.question !== '' && quizzCard.answer !== '') {
//             this.props.addCardToDeck(title[3], quizzCard);
//             }
//     }
//
// }

function mapDispatchToProps(dispatch){
    return {
        saveDeckTitle:(title)=> dispatch(saveDeckTitle(title)),
        addCardToDeck: (title, quizzCard) => dispatch(addCardToDeck(title, quizzCard)),
        getDecks: () => dispatch(getDecks()),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DeckList)