import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191970",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FF7F50",
    fontSize: 40,
    fontWeight: "bold",
  },
  smallTitle: {
    color: "#fff",
    fontSize: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInputStyle: {
    borderRadius: 35,
    width: 250,
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    color: "#000",
    backgroundColor: "#fff",
    fontSize: 30,
    paddingHorizontal: 20,
  },
  checker: {
    flexDirection: "row",
  },
  tabsContainer: {
    flexDirection: "row",
  },
  tab: {
    flexDirection: "row",
    width: 100,
    height: 50,
    borderRadius: 35,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  tabSelected: {
    flexDirection: "row",
    width: 100,
    height: 50,
    borderRadius: 35,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF7F50",
  },
  tabText: {
    color: "#000",
    fontSize: 25,
  },
  itemText: {
    color: "#fff",
    fontSize: 20,
  },
  itemTextDone: {
    color: "#FF7F50",
    fontSize: 20,
    textDecorationLine: "line-through",
  },
});
