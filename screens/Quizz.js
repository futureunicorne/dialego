import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, StatusBar, TextInput} from 'react-native'
import { Container, View, Button, Text, Body, Input, Image} from 'native-base';
import { connect } from 'react-redux'
import { Row, Grid } from 'react-native-easy-grid'

import { setLocalNotification, clearLocalNotification } from '../utils/notifications'
import { white, gray, green, red, purple } from '../utils/colors'

class Quiz extends Component{

    state = {
        currentQuestion:1,
        showQuestion:true,
        correctQuizNumber:0,
        quizOver: false,
        answerClient: '',
        quizRestart: false,
        points: 0
    }

    flipCard = () => {
        const showQuestion = !this.state.showQuestion;
        this.setState({ showQuestion });
    }

    sameAnswer = (answer) => {
        if ( answer.localeCompare(this.state.answerClient) >= 0 ) {
            console.debug(answer.localeCompare(this.state.answerClient));
            this.state.points = this.state.points + 10
        }
        else
            this.state.points = this.state.points + 2

        console.debug(this.state.points)
    }


    nextQuiz = (quizzes) =>{
        const deck = this.props.navigation.state.params.decks;
        const questions = deck.questions
        // number of correct quiz
        const correctQuizNumber = (
            quizzes
                ? this.state.correctQuizNumber + 1
                : this.state.correctQuizNumber
        )
        const currentQuestion = this.state.currentQuestion + 1
        const showQuestion = true;
        this.setState({ currentQuestion, showQuestion, correctQuizNumber})
        if(currentQuestion > questions.length){
            this.setState({ quizOver: true})
        }
    }

    restartQuiz = () => {
        this.setState({
            currentQuestion:1,
            showQuestion:true,
            correctQuizNumber:0,
            quizRestart: true,
            quizOver: false
        })
    }

    render(){
        const deck = this.props.navigation.state.params.decks
        const title = deck.title
        const questions = deck.questions
        const { currentQuestion, showQuestion, correctQuizNumber, quizOver, quizRestart} = this.state
        if(quizRestart){
            clearLocalNotification()
                .then(setLocalNotification)
            const correctQuizPercentage = Math.round((correctQuizNumber/questions.length)*100)
            return (
                <Container>
                    <Grid>
                        <Row size={1} style={styles.rowTop}>
                            <Text style={styles.welcome}>
                                It's time to play
                            </Text>
                        </Row>
                        <Row size={3} style={styles.rowBot}>
                            <View style={styles.container}>
                                <Text style={styles.numCards}> { currentQuestion }/ { questions.length } </Text>
                                {
                                    showQuestion
                                        ?<Text  style={styles.showQuestionCardText}>{ questions[ currentQuestion - 1].question} </Text>
                                        :
                                        <Body>
                                        <Text  style={styles.showQuestionCardText}>Top answer { questions[ currentQuestion - 1].answer} </Text>
                                        <Text  style={styles.showQuestionCardText}>Answer { questions[ currentQuestion - 1].answer} </Text>
                                        </Body>
                                }
                                <TouchableOpacity
                                    style={styles.flipCard}
                                    onPress={this.flipCard} >
                                    <Text style = {styles.btnText}>{ showQuestion ? 'answer' : 'question' }</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.correctButton}
                                    onPress={this.nextQuiz.bind(null, true)}>
                                    <Text style = {styles.btnText}>Correct</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.incorrectButton}
                                    onPress={this.nextQuiz.bind(null, false)}>
                                    <Text style = {styles.btnText}>Incorrect</Text>
                                </TouchableOpacity>
                            </View>
                        </Row>
                    </Grid>
                </Container>
            )
        }

        if(quizOver){
            clearLocalNotification()
                .then(setLocalNotification)
            const correctQuizPercentage = Math.round((correctQuizNumber/questions.length)*100)
            return(
                <Container>
                    <Grid>
                        <Row size={1} style={styles.rowTop}>
                            <Text style={styles.welcome}>
                                Thanks for playing
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
                                <Text style={{ marginTop: 5, marginBottom: 40, color: '#F5FCFF',  fontFamily: 'comic-sans-ms', fontSize: 20}}>
                                    Let's <Text style={{color: '#4F6D7A',  fontFamily: 'comic-sans-ms', fontSize: 20}}>Start </Text>
                                </Text>
                                <Body>
                                <Text style={styles.quizPercentageResults}>Congratulation</Text>
                                <Text style={styles.quizPercentageResults}>you win {this.state.points} points</Text>

                                <TouchableOpacity
                                    style={styles.restartQuizButton}
                                    onPress = { () => this.restartQuiz()}>
                                    <Text style = { styles.btnText}> Admin validation </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.backToDeckButton}
                                    onPress = { () => this.props.navigation.goBack()}>
                                    <Text style = { styles.btnText}>Category</Text>
                                </TouchableOpacity>

                                </Body>
                            </View>
                        </Row>
                    </Grid>
                </Container>
            )
        }
        else {
            return (
                <Container>
                    <Grid>
                        <Row size={1} style={styles.rowTop}>
                            <Text style={styles.welcome}>
                                It's time to play
                            </Text>
                        </Row>
                        <Row size={3} style={styles.rowBot}>
                            <View style={styles.container}>
                                <StatusBar
                                    barStyle="light-content"
                                    backgroundColor="#4F6D7A"
                                />
                                <Text style={{ marginTop: 20, color: '#F5FCFF', fontFamily: 'comic-sans-ms', fontSize: 20}}>
                                    Can you Translate
                                </Text>
                                <Text style={{ marginTop: 5, marginBottom: 10, color: '#F5FCFF',  fontFamily: 'comic-sans-ms', fontSize: 20}}>
                                   The  <Text style={{color: '#4F6D7A',  fontFamily: 'comic-sans-ms', fontSize: 20}}>Word </Text>
                                </Text>
                                <Body>
                                {
                                    showQuestion
                                        ? <Body>
                                        <Text style={styles.showQuestionCardText}>{questions[currentQuestion - 1].question} </Text>
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={(answerClient) => this.setState({answerClient})}
                                            value={this.state.question}/>
                                        <TouchableOpacity
                                            style={styles.flipCard}
                                            onPress={this.flipCard} >
                                            <Text style = {styles.btnText}>{ showQuestion ? 'Translate' : 'question' }</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.showQuestionCardText1}> Current pts : {this.state.points} pts </Text>

                                        <Text style={styles.numCards}> { currentQuestion }/ { questions.length } </Text>

                                        </Body>
                                        : <Body>
                                         {this.sameAnswer(questions[currentQuestion - 1].answer)}
                                        <Text style={styles.showQuestionCardText}>{questions[currentQuestion - 1].question} </Text>
                                        <Text style={styles.showQuestionCardText1}> most frequent answer : {questions[currentQuestion - 1].answer} </Text>
                                        <Text style={styles.showQuestionCardText1}> your answer : {this.state.answerClient} </Text>
                                        <Text style={styles.showQuestionCardText1}> your have  : {this.state.points} pts </Text>
                                        <TouchableOpacity
                                            style={styles.flipCard}
                                            onPress={this.nextQuiz.bind(null, false)}>
                                            <Text style = {styles.btnText}>Next Question</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.numCards}> { currentQuestion }/ { questions.length } </Text>
                                        </Body>
                                }
                                </Body>
                            </View>
                        </Row>
                    </Grid>
                </Container>
            )
        }
    }
}
const styles = StyleSheet.create({
    showQuestionCardText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#697282',
        marginBottom: 30
    },
    showQuestionCardText1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#697282',
        marginBottom: 25
    },
    numCards: {
        fontSize: 18,
        fontWeight: '500',
        color: gray
    },
    flipCard: {
        marginTop: 20,
        marginBottom: 10,
        paddingVertical: 20,
        paddingHorizontal: 60,
        borderRadius: 2,
        borderWidth: 1,
        fontFamily: 'comic-sans-ms',
        backgroundColor: "#4F6D7A",
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    correctButton: {
        marginTop: 20,
        marginBottom: 10,
        paddingVertical: 20,
        paddingHorizontal: 60,
        borderRadius: 2,
        borderWidth: 1,
        backgroundColor: green,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
    incorrectButton: {
        marginTop: 20,
        marginBottom: 10,
        paddingVertical: 20,
        paddingHorizontal: 55,
        borderRadius: 2,
        borderWidth: 1,
        backgroundColor: red,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quizPercentageResults: {
        fontSize: 34,
        fontWeight: '500',
        color: "gray"
    },
    restartQuizButton: {
        marginTop: 20,
        marginBottom: 10,
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 2,
        borderWidth: 1,
        backgroundColor: '#4F6D7A',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginBottom: 20,
        padding: 10,
        width: 300,
        backgroundColor: white,
        borderRadius: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black'
    },
    backToDeckButton: {
        marginTop: 20,
        marginBottom: 10,
        paddingVertical: 20,
        paddingHorizontal: 90,
        borderRadius: 2,
        borderWidth: 1,
        backgroundColor: '#4F6D7A',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
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
})

const mapStateToProps = store => {
    return {
        points: store.points
    }
}

export default connect(mapStateToProps)(Quiz)