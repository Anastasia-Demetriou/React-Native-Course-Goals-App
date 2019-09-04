import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  //this will be binded to the textInput, when user types a character we will update
  //update the state (setEnteredGoal) and save entered text (access through enteredGoal)
  //and pass enteredGoal into the textinput (2 way binding controlled component)
  const [enteredGoal, setEnteredGoal] = useState('');
  //updates the state on whatever the user entered
  const [courseGoals, setCourseGoals] = useState ([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
   setCourseGoals(currentGoals => [...currentGoals, 
    { id: Math.random().toString(), value: enteredGoal }
  ]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>  
        <TextInput 
        placeholder="Course Goal" 
        style={styles.input} 
        onChangeText={goalInputHandler}
        //passes the text back to the textinput (binding the value property to enteredGoal)
        //to the state which changed at every key stroke
        value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList 
        keyExtractor={(item, index) => item.id} 
        data={courseGoals} 
        renderItem={itemData =>(
        <View style={styles.listItem}>
           <Text>{itemData.item.value}</Text>
           </View>
      )}
      />         
    </View>
)};
//using StyleSheet.create allows you up validation and will throw up any errors
// it also allows you to have much leaner JSX code (above)

const styles = StyleSheet.create({
  //screen can be any name you are connecting this to your parent view via styles.screen
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection:'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  }, 
  input: {
    width: '80%',
    borderColor: 'black', 
    borderWidth: 1,
    padding: 10
  }, 
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderWidth: 1 


  }
});
