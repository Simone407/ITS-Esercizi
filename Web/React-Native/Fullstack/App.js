import { useEffect, useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";
import { addTask, doneTask, fetchTasks } from "./services/tasksService";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function startAddTask() {
    setModalVisible(true);
  }

  function endAddTask() {
    setModalVisible(false);
  }

  async function loadTasks() {
    const tasksFromApi = await fetchTasks();
    setTasks(tasksFromApi);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function addTaskHandler(task) {
    await addTask(task);
    await loadTasks();
    endAddTask();
  }

  async function completeTask(task) {
    await doneTask(task);
    await loadTasks();
  }

  const visibleTasks = tasks.filter(task => !task.done);

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Task" color="#5e0acc" onPress={startAddTask} />

      <TaskInput
        visible={modalVisible}
        onAddTask={addTaskHandler}
        onCancel={endAddTask}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={visibleTasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem
              taskItem={item}
              onDelete={completeTask}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
