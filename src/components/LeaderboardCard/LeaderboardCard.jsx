import { Avatar } from "@rneui/base";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const LeaderboardCard = ({ name, score, position, img, rank }) => {
  const cardStyle = position === 0 ? styles.firstCard : styles.otherCard;
  const avatarSize = position === 0 ? 200 : 100;

  return (
    <View style={[styles.card, cardStyle]}>
      {position === 0 ? <Text style={styles.heading}>Our Topdog!</Text> : ""}
      <Avatar
        size={avatarSize}
        rounded
        source={{ uri: img }}
        containerStyle={styles.photo}
      />
      <Text style={styles.rank}>#{rank}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.score}>{score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    alignSelf: "center",
  },
  firstCard: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.yellow,
    width: 300,
    fontSize: 20,
  },
  otherCard: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  name: {
    fontSize: 30,
    fontWeight: "regular",
    marginBottom: 8,
    color: colors.blue
  },
  rank: {
    fontSize: 30,
    fontWeight: "epilogueBold",
    marginBottom: 8,
  },
  score: {
    fontSize: 32,
    color: colors.blue,
    fontFamily: 'epilogueBold'
  },
  heading:{
    fontFamily: 'epilogueBold',
    marginVertical: 20,
    color: colors.blue,
    fontSize: 30
  }
});

export default LeaderboardCard;
