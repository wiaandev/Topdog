import { ActivityIndicator, Pressable, Text, View } from "react-native";
import React from "react";
import { Button, Divider, Image } from "@rneui/themed";
import { styles } from "./PetCard.style";

const PetCard = ({ img, name, breed, vaccinated, age}) => {

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: img }}
        containerStyle={styles.img}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.dogName}>{name}</Text>
      <Divider />
      <Text>Breed: {breed}</Text>
      <Text>Age: {age}</Text>
      <Text>Vaccinated: {vaccinated}</Text>
      <Button title={"Delete"}/>
    </View>
  );
};

export default PetCard;
