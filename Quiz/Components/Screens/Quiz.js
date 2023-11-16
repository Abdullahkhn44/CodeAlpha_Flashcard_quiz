import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import FlipCard from 'react-native-flip-card';

const Quiz = ({route}) => {
  const receivedQuestion = route.params?.receivedQuestion;
  const receivedAnswer = route.params?.receivedAnswer;
  const receivedtitle = route.params?.newTitle;
  console.log(receivedQuestion);
  console.log(receivedAnswer);

  const [isCorrect, setIsCorrect] = useState(1);
  const [isnotCorrect, setIsnotCorrect] = useState(0);
  const [counter, setCounter] = useState(1);
  const [score, setScore] = useState('');

  const Correct = () => {
    let set = counter + 1;
    setCounter(set);
    console.log(counter);

    let countCorrect = isCorrect + 1;
    setIsCorrect(countCorrect);

    console.log('CORRECT ARE : ' + isCorrect);

    if (counter === 5) {
      finish();
      console.log('FINAL SCORE : ' + isCorrect);
    }
  };

  const Incorrect = () => {
    let newSet = counter + 1;
    setCounter(newSet);
    console.log(counter);

    let countinCorrect = isCorrect - 1;
    setIsCorrect(countinCorrect);

    if (counter === 5) {
      finish();
    }
  };

  const finish = () => {
   
    console.log('FINAL SCORE : ' + isCorrect);

    showScore();
  };

  const showScore = () => {
    setScore(isCorrect);
  };

  const renderCard = ({item}) => (
    <FlipCard
      flipHorizontal={true}
      flipVertical={false}
      style={styles.Flipcard}>
      {/* Front Side */}
      <View style={styles.face}>
        <Text style={styles.Rquestion}>{item.question}</Text>
      </View>

      {/* Back Side */}
      <View style={styles.back}>
        <Text style={styles.Ranswer}>{item.answer}</Text>
      </View>
    </FlipCard>
  );

  // Combine questions and answers into a single array of objects
  const data = receivedQuestion.map((question, index) => ({
    question,
    answer: receivedAnswer[index],
  }));

  return (
    <View style={styles.main}>
      <Text style={styles.titleText}>{receivedtitle}</Text>
      <View style={styles.newView}>
        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
        />
      </View>
      <Text>Swipe the cards right... and tap to see answers</Text>

      <View style={styles.ButnView}>
        <TouchableOpacity style={styles.correct} onPress={Correct}>
          <Text style={styles.correctText}>Correct </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Incorrect} onPress={Incorrect}>
          <Text style={styles.IncorrectText}>Incorrect </Text>
        </TouchableOpacity>
      </View>
      {score && (
      <View style={styles.showScore}>
        <Text style={styles.scoreText}> Your Final Score : {score}</Text>
      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Flipcard: {
    borderRadius: 10,
    width: 360,
    padding: 10,
  },
  face: {
    backgroundColor: 'orange',
    height: 230,
    borderRadius: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  back: {
    backgroundColor: 'seagreen',
    height: 230,
    borderRadius: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newView: {
    height: 280,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  Rquestion: {
    fontSize: 16,
    fontWeight: '700',
  },
  Ranswer: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  ButnView: {
    marginTop: 18,
    flexDirection: 'row-reverse',
    padding: 10,
  },
  correct: {
    backgroundColor: 'seagreen',
    width: 120,
    marginLeft: 70,
    borderRadius: 7,
    justifyContent: 'center',
    height: 45,
  },
  Incorrect: {
    backgroundColor: 'pink',
    width: 120,
    height: 45,

    borderRadius: 7,
    justifyContent: 'center',
  },
  correctText: {
    textAlign: 'center',

    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  IncorrectText: {
    textAlign: 'center',

    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  showScore: {
    marginTop: 55,
    width: 150,
    textAlign: 'center',
    alignItems: 'center',
    height: 25,
  },
  scoreText:{
    color:'black',
    fontWeight:'600',
    fontSize:16
  }
});

export default Quiz;
