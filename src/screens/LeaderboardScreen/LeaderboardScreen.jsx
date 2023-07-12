import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import { getLeaderboard } from "../../services/firebase-db";
import LeaderboardCard from "../../components/LeaderboardCard/LeaderboardCard";
import { styles } from "./LeaderboardScreen.style";
import { Icon } from "@rneui/themed";
import { colors } from "../../utils/colors";

const LeaderboardScreen = ({ navigation, route }) => {
  const { id } = route.params;
  console.log(id);
  const [entries, setEntries] = useState([]);

  const onRetrieveEntries = async () => {
    const entries = await getLeaderboard(id);
    setEntries(entries);
    console.log(entries);
  };

  useFocusEffect(
    useCallback(() => {
      onRetrieveEntries();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Icon name="arrow-back" type="material" color={colors.white}/>
        <Text style={{ color: colors.white }}>Go Back</Text>
      </Pressable>
      <FlatList
        data={entries}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <LeaderboardCard
            name={item.name}
            score={item.score}
            position={index}
            img={item.img}
            rank={index + 1}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default LeaderboardScreen;
