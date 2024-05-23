import {
  View,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
  ListItem,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {images} from './app/theme/images';
import styles from './styles';

const colors = {primary: '#1f145c', white: '#fff'};
export default function App() {
  const [textInput, setTextInput] = React.useState('');
  const [todos, setTodos] = React.useState([
    {id: 1, task: 'First todo', completed: true},
    {id: 2, task: 'Second todo', completed: false},
    {id: 3, task: 'Third todo', completed: true},
    {id: 4, task: 'Fouth todo', completed: false},
    {id: 5, task: 'Fifth todo', completed: true},
    {id: 6, task: 'Sixth todo', completed: false},
    {id: 7, task: 'Seventh todo', completed: true},
    {id: 8, task: 'Eighth todo', completed: false},
    {id: 9, task: 'Ninth todo', completed: true},
    {id: 10, task: 'Tenth todo', completed: false},
  ]);
  const ListItem = ({todo}) => {
    return (
      <View style={styles.listViewStyle}>
        <View style={{flex: 1}}>
          <Text
            style={{
              // flex: 1,
              fontWeight: 'bold',
              fontSize: 15,
              color: colors.primary,
              textDecorationLine: todo?.completed ? 'line-through' : 'none',
            }}>
            {todo?.task}
          </Text>
        </View>
        <View style={styles.boxIconStyle}>
          {!todo?.completed && (
            <TouchableOpacity
              style={styles.donButtonStyle}
              onPress={() => markTodoComplete(todo?.id)}>
              <Image source={images.done} style={styles.doneButtonStyle} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => deleteTodo(todo?.id)}>
            <Image source={images.delete} style={styles.delButtonStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const addTodo = () => {
    if (textInput == '') {
      Alert.alert('Please input Text');
    } else {
      console.log(textInput);
      const newTodo = {
        id: Math.random(),
        task: textInput,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setTextInput('');
    }
  };
  const markTodoComplete = TodoId => {
    const newTodos = todos.map(item => {
      if (item.id == TodoId) {
        return {...item, completed: true};
      }
      return item;
    });
    setTodos(newTodos);
  };
  const deleteTodo = todoId => {
    const newTodos = todos.filter(item => (item.id != todoId));
    setTodos(newTodos);
  };


const clearTodos = ()=>{
  setTodos([]);

};

  return (
    // ----------------Screen Start---------------------
    <SafeAreaView style={styles.safeAreaStyle}>
      <StatusBar backgroundColor={'green'} barStyle={'default'} />
      {/*--------------Header----Start---------------*/}
      <View style={styles.headerStyle}>
        <Text style={styles.titleStyle}>TODO Tasks</Text>
        <TouchableOpacity onPress={() => clearTodos()}>
          <Image source={images.delete} style={styles.addBtn1} />
        </TouchableOpacity>
      </View>
      {/*--------------Header----End---------------*/}

      <FlatList
        style={{marginBottom: 100}}
        contentContainerStyle={{padding: 15}}
        showsVerticalScrollIndicator={false}
        data={todos}
        renderItem={({item}) => <ListItem todo={item} />}
      />

      {/* --------------Footer----Start--------------- */}
      <View style={styles.footerStyle}>
        <View style={styles.FooterSubView}>
          <TextInput
            placeholder="TODOs"
            value={textInput}
            onChangeText={text => setTextInput(text)}
          />
        </View>
        <TouchableOpacity onPress={addTodo}>
          <View>
            <Image source={images.plus} style={styles.addBtn} />
          </View>
        </TouchableOpacity>
      </View>

      {/*--------------Footer----End---------------*/}
    </SafeAreaView>
    // ----------------Screen End---------------------
  );
}
