import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  function taskInputHandler(enteredTask) {
    console.log(enteredTask);
    setTask(enteredTask);
  }

  function addTaskHandler() {
    setTasks((current) => [...current, { task,id:new Date()}]);
    setTask("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Inserisci task"
          onChangeText={taskInputHandler}
          value={task}
        />
        <Button
          title="Aggiungi"
          onPress={addTaskHandler}
          disabled={task === ""}
        ></Button>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList alwaysBounceVertical={true}
          data={tasks}
          renderItem={(itemData) => {
           
            return (
              <TaskItem taskItem={itemData.item}></TaskItem>
              // <View style={styles.taskItem}>
              //   <Text style={styles.taskText}>{itemData.item.task}</Text>
              // </View>
            );
          }}
          keyExtractor={(item)=> item.id}
        />
        {/* <ScrollView>
          {tasks.map((t, index) => (
            <View key={index} style={styles.taskItem}>
              <Text style={styles.taskText}>{t}</Text>
            </View>
          ))}
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#ebeae6ff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  goalsContainer: {
    flex: 4,
  },
  
});