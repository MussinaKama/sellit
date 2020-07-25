import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  Picker,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppTextInput from "./AppTextInput";
import PickerItem from "../components/PickerItem";
import App from "../../App";

export default function AppPicker({
  icon,
  placeholder,
  items,
  onSelectItem,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.primary}
              style={styles.icon}
            />
          )}
          {selectedItem ? (<AppText style={styles.text}>{selectedItem.label}</AppText>) : (<AppText style={styles.placeholder}>{placeholder}</AppText>)}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.primary}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => {item.value, item.id}}
          renderItem={({ item }) => (
            <PickerItem label={item.label} onPress={() => {setModalVisible(false); onSelectItem(item);}} />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 20,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: colors.grey,
    fontSize: 18,
    flex: 1,
  },
  placeholder: {
    color: colors.grey,
    flex: 1
  }
});
