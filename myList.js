import React from "react";
import { FlatList, Text, View } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles";

export const MyList = ({ todos, setTodos, flag }) => {
  switch (flag) {
    case "all":
      return (
        <View style={{ width: 200, height: 200 }}>
          <FlatList
            data={todos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.checker}>
                {item.done ? (
                  <FontAwesome
                    name="check-square-o"
                    size={24}
                    color="#FF7F50"
                  />
                ) : (
                  <MaterialIcons
                    name="check-box-outline-blank"
                    size={24}
                    color="white"
                    onPress={() => {
                      item.done = true;
                      setTodos([...todos]);
                    }}
                  />
                )}
                <View style={{ width: 20 }}></View>
                <Text style={item.done ? styles.itemTextDone : styles.itemText}>
                  {item.todo}
                </Text>
              </View>
            )}
          ></FlatList>
        </View>
      );
      break;
    case "active":
      let tempArr = [...todos].filter((elem) => elem.done == false);
      return (
        <View style={{ width: 200, height: 200 }}>
          <FlatList
            data={tempArr}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View style={styles.checker}>
                  <MaterialIcons
                    name="check-box-outline-blank"
                    size={24}
                    color="white"
                    onPress={() => {
                      item.done = true;
                      setTodos([...todos]);
                    }}
                  />
                  <View style={{ width: 20 }}></View>
                  <Text style={styles.itemText}>{item.todo}</Text>
                </View>
              );
            }}
          ></FlatList>
        </View>
      );
      break;
    case "done":
      let tempArr2 = [...todos].filter((elem) => elem.done == true);
      return (
        <View style={{ width: 200, height: 200 }}>
          <FlatList
            data={tempArr2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View style={styles.checker}>
                  <FontAwesome
                    name="check-square-o"
                    size={24}
                    color="#FF7F50"
                  />
                  <View style={{ width: 20 }}></View>
                  <Text style={styles.itemTextDone}>{item.todo}</Text>
                </View>
              );
            }}
          ></FlatList>
        </View>
      );
      break;
  }
};
