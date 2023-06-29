import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./DogsScreen.style";
import { colors } from "../../utils/colors";
import { Button, Icon } from "@rneui/themed";
import { GlobalStyles } from "../../utils/global.styles";
import { FlatList } from "react-native";
import { UserContext } from "../../context/User.context";

export default function DogsScreen({navigation}) {

  const {pets} = useContext(UserContext);

  const onAddPet = () => {
    navigation.navigate("AddDog")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 30,
        }}
      >
        <Text onPress={navigation.goBack}>Go Back</Text>
        <Text style={styles.heading}>Your Dogs</Text>
        <Button
          title={"Add"}
          type="outline"
          icon={{ name: "add", type: "material", color: colors.blue }}
          iconRight
          titleStyle={{ fontFamily: "epilogueRegular", color: colors.blue }}
          buttonStyle={styles.addButton}
          onPress={onAddPet}
        />
      </View>
      <FlatList
        numColumns={2}
        data={pets}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <PetCard
            name={"Jake"}
            img={
              "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            }
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}
