import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList,Image} from 'react-native';


const localImage=require('../assets/Images/Nothing.png')

const Home = ({navigation, route}) => {
  const [userInputs, setUserInputs] = useState([]);

  const receivedTitle = route.params?.title;
  const receivedQuestion = route.params?.question;
  const receivedAnswer = route.params?.answer;

  const toQuiz = () => {
    navigation.navigate('Quiz', {
      newTitle: receivedTitle,
      receivedQuestion: receivedQuestion,
      receivedAnswer: receivedAnswer,
    });
  };

  useEffect(() => {
    if (receivedTitle) {
      setUserInputs(prevInputs => [...prevInputs, receivedTitle]);
    }
  }, [receivedTitle]);

  // Render item function for FlatList
  const renderItem = ({item}) => (
    <View style={styles.list}>
      <TouchableOpacity onPress={toQuiz}>
        <Text style={styles.title}>{item}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.main}>
      {userInputs.length > 0 ? (
        <FlatList
          data={userInputs}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.ImageView}>
          <Image source={localImage} style={styles.image} />
          <Text>Make a Quiz First Please</Text>
        </View>
      )}

      {/* {receivedTitle ? (
        <View style={styles.list}>
          <TouchableOpacity onPress={toQuiz}>
            <Text style={styles.title}> {receivedTitle}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>Make Quiz in the ADD section!</Text>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  list: {
    alignContet: 'center',
    backgroundColor: '#FF5733',
    width: 320,
    height: 65,
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 30,
  },
  title: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'left',
    marginLeft: 10,
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

});

export default Home;
