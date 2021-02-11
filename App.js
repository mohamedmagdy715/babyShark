import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";
import { MyList } from "./myList";

export default function App() {
  const [value, onChangeText] = React.useState("");
  const [flag, setFlag] = React.useState("all");
  const [todos, setTodos] = React.useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BABY SHARK</Text>
      <Text style={styles.smallTitle}>
        <Text style={{ fontWeight: "bold" }}>TODO</Text>-dodododoododoooooooo
      </Text>
      <View style={{ height: 50 }}></View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Add a TODO"}
          {...{ value, onChangeText }}
          style={styles.textInputStyle}
        ></TextInput>
        <View style={{ width: 20 }}></View>
        <AntDesign
          name="pluscircle"
          size={40}
          color="#FF7F50"
          onPress={() => {
            if (value) {
              setTodos([
                ...todos,
                {
                  todo: value,
                  done: false,
                },
              ]);
              onChangeText("");
            }
          }}
        />
      </View>
      <View style={{ height: 50 }}></View>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={flag == "all" ? styles.tabSelected : styles.tab}
          onPress={() => {
            setFlag("all");
          }}
        >
          <Text style={styles.tabText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={flag == "active" ? styles.tabSelected : styles.tab}
          onPress={() => {
            setFlag("active");
          }}
        >
          <Text style={styles.tabText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={flag == "done" ? styles.tabSelected : styles.tab}
          onPress={() => {
            setFlag("done");
          }}
        >
          <Text style={styles.tabText}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 50 }}></View>
      <MyList todos={todos} setTodos={setTodos} flag={flag}></MyList>
      <StatusBar style="auto" />
    </View>
  );
}
