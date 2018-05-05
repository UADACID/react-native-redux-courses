/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'

class Root extends Component {
  render() {
    const todosValue = this.props.todos // state from mapStateToProps
    const taskValue = this.props.task // state from mapStateToProps
    const onChangeTask = this.props.onChangeTask // action from mapDispatchToProps
    const onAddTodo = this.props.onAddTodo // action from mapDispatchToProps
    const removeTodo = this.props.removeTodo
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Todo is your future</Text>
        <TextInput
          style={styles.textInput}
          value={taskValue}
          onChangeText={onChangeTask}
        />
        <TouchableOpacity
          style={styles.buttonAdd}
          onPress={()=>onAddTodo(taskValue)}>
          <Text>Add</Text>
        </TouchableOpacity>
        <ScrollView>
          {todosValue.map((item, index)=>{
            return (
              <View key={index} style={styles.item}>
                <Text style={styles.task}>{item}</Text>
                <Text
                  style={styles.taskRemove}
                  onPress={()=>removeTodo(index)}> remove </Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    todos : state.todos,
    task : state.task
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeTask : (payload) => {
    dispatch({type:'ON_CHANGE_TASK', payload : payload})
  },
  onAddTodo : (taskValue) => {
    dispatch({type:'ADD_TODO', payload:taskValue})
    dispatch({type:'CLEAR_TASK'})
  },
  removeTodo : (indexSelectedForRemove) => {
    dispatch({type:'REMOVE_TODO', payload: indexSelectedForRemove})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20
  },
  title:{
    fontSize: 20
  },
  textInput:{
    height: 50,
    borderWidth: 1,
    padding: 10
  },
  buttonAdd:{
    backgroundColor: 'gray',
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  task:{
    margin:10
  },
  taskRemove : {
    color:'red',
    margin: 10
  }
});
