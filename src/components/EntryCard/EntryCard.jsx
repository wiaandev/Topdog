import { Text, View } from "react-native";
import React, { useState } from "react";
import { Avatar, Button, Divider, Input } from "@rneui/themed";
import { styles } from "./EntryCard.style";
import { colors } from "../../utils/colors";

const EntryCard = ({
  name,
  img,
  breedType,
  age,
  score,
  setScore,
  sendScore,
  id,
  onChangeText,
}) => {
  const [state, setState] = useState();

  return (
    // <View style={styles.container}>
    //   <Text>{id}</Text>
    //   <View style={styles.column}>
    //     <Avatar
    //       size={200}
    //       rounded
    //       source={{ uri: img }}
    //       containerStyle={styles.photo}
    //     />
    //     <Text style={styles.entryCardHeading}>{name}</Text>
    //     <Text style={styles.entryCardBreed}>{breedType}</Text>
    //     <Text style={styles.entryCardAge}>{age} Years Old</Text>
    //   </View>
    //   <View style={styles.score}>
    //     <Input
    //       autoCapitalize="none"
    //       autoCorrect={false}
    //       onChangeText={(newValue) => {
    //         setState(newValue);
    //         onChangeText(newValue);
    //       }}
    //       value={score}
    //       inputStyle={{
    //         fontFamily: "caveat",
    //         color: colors.yellow,
    //         fontSize: 64,
    //       }}
    //       label={"Score"}
    //       labelStyle={{
    //         fontFamily: "regular",
    //         color: colors.yellow,
    //         alignSelf: "center",
    //       }}
    //       inputContainerStyle={styles.input}
    //     />
    //   </View>
    //   <Button
    //     title={"Submit Score"}
    //     buttonStyle={styles.enterButton}
    //     onPress={sendScore}
    //     titleStyle={{ fontFamily: "bold", color: colors.blue }}
    //   />
    // </View>
    <View style={styles.container}>
      <View style={styles.row}>
        <Avatar
          size={100}
          rounded
          source={{ uri: img }}
          containerStyle={styles.photo}
        />
        <View>
          <Text style={styles.heading}>{name}</Text>
          <Text style={styles.subHeading}>{breedType}</Text>
        </View>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(newValue) => {
            setState(newValue);
            onChangeText(newValue);
          }}
          value={score}
          inputStyle={{
            fontFamily: "caveat",
            color: colors.yellow,
            fontSize: 40,
          }}
          label={"Score"}
          labelStyle={{
            fontFamily: "epilogueRegular",
            color: colors.yellow,
            marginLeft: 15
          }}
          inputContainerStyle={styles.input}
        />
      </View>
      <Button
        title={"Submit Score"}
        buttonStyle={styles.enterButton}
        onPress={sendScore}
        titleStyle={{ fontFamily: "bold", color: colors.blue }}
      />
    </View>
  );
};

export default EntryCard;
