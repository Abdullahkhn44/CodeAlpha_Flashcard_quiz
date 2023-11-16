import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Modal,
  Text,
  Alert,
  TextInput,
} from 'react-native';

import {useFocusEffect, useNavigation} from '@react-navigation/native';
import RButton from '../Button/Rbutton';

const Add = () => {
  const localImage = require('../assets/Images/One.png');
  const navigation = useNavigation();

  const [modalVisible, setmodalVisible] = useState(false);
  const [newModal, setNewModal] = useState(false);
  const [isQuestion, setQuestion] = useState('');
  const [isAnswer, setAnswer] = useState('');
  const [isTitle, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [counter, setCounter] = useState(1);

  // useEffect(() => {
  //   // Clear inputs when the counter changes
  //   setQuestion('');
  // }, [counter]);

  // useEffect(() => {
  //   // Clear inputs when the counter changes
  //   setAnswer('');
  // }, [counter]);

  const Show = () => {
    setNewModal(true);
  };

  const Close = () => {
    setmodalVisible(false);
    setNewModal(false);
  };
  useFocusEffect(
    React.useCallback(() => {
      // Reset the counter to 0 when the screen comes into focus
      setCounter(0);
    }, []),
  );

  const Submit = () => {
   



    if (counter === 5) {
      setmodalVisible(false);

      navigation.navigate('Home', {
        title: isTitle,
        question: questions,
        answer: answers,
      });

      Alert.alert('Successful!');
    } else {
      setQuestions(prevQuestions => [...prevQuestions, isQuestion]);
      setAnswers(prevQuestions => [...prevQuestions, isAnswer]);

      setQuestion('');
      setAnswer('');
      setCounter(prevCounter => prevCounter + 1);
    }
  };

  const Confirm = () => {
    setNewModal(false);
    setmodalVisible(true);
  };

  return (
    <View style={styles.main}>
      <View style={styles.ImageView}>
        <Image source={localImage} style={styles.image} />
      </View>

      {/*ADD BUTTON */}
      <View style={styles.ButnView}>
        <RButton text="ADD QnA's" press={Show} />
      </View>
      {/* NEW MODAL */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={newModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setNewModal(!newModal);
        }}>
        <View style={styles.mainModal}>
          <View style={styles.modal}>
            <TextInput
              placeholder="Title Of your Quiz"
              style={styles.Input}
              onChangeText={text => setTitle(text)}></TextInput>

            <View style={styles.Modalbutn}>
              <RButton
                style={{width: 100, marginRight: 60}}
                text="Close"
                press={Close}
              />
              <RButton style={{width: 100}} text="Confirm" press={Confirm} />
            </View>
          </View>
        </View>
      </Modal>
      {/* ADD QNA MODAL */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodalVisible(!modalVisible);
        }}>
        <View style={styles.mainModal}>
          <View style={styles.modal}>
            {/* TEXT INPUT */}
            <View style={styles.InputView}>
              <Text>{counter}/5</Text>
              <TextInput
                placeholder="Question"
                multiline={true}
                style={styles.Input}
                value={isQuestion}
                onChangeText={text => setQuestion(text)}></TextInput>
              <TextInput
                placeholder="Answer"
                multiline={true}
                style={styles.Input}
                value={isAnswer}
                onChangeText={text => setAnswer(text)}></TextInput>
            </View>

            {/* BUTTONS */}
            <View style={styles.Modalbutn}>
              <RButton
                style={{width: 100, marginRight: 60}}
                text="Close"
                press={Close}
              />
              <RButton style={{width: 100}} text="Submit" press={Submit} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  ImageView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 5,
  },

  image: {
    width: 300,
    height: 300,
  },

  ButnView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 330,
  },
  mainModal: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  Modalbutn: {
    flexDirection: 'row',
  },
  Input: {
    borderColor: 'gray',
    width: 250,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  InputView: {
    marginBottom: 25,
    padding: 10,
  },
});

export default Add;
