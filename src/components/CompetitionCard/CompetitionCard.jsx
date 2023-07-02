import { ImageBackground, Text, View } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";
import { Chip } from "@rneui/themed";
import { styles } from "./CompetitionCard.style";
import { Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";

const CompetitionCard = ({ heading, address, countdown, banner }) => {
  return (
    // <View style={styles.container}>
    //   <View style={styles.competition}>
    //     <Text style={styles.competitionHeading}>{heading}</Text>
    //     <Text style={styles.address}>{address}</Text>
    //   </View>
    //   <View style={styles.inner}>
    //     <Text style={styles.subHeading}>Requirements</Text>
    //     <View style={{flexDirection: 'row', gap: 10 }}>
    //       <Chip
    //         title="2-3 years"
    //         containerStyle={styles.chipStyle}
    //         color={COLORS.blue}
    //       />
    //       <Chip
    //         title="Golden Retriever"
    //         containerStyle={styles.chipStyle}
    //         color={COLORS.blue}
    //       />
    //     </View>
    //   </View>
    // </View>
    <ImageBackground
      source={{ uri: banner }}
      resizeMode="cover"
      style={{
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginVertical: 10,
        overflow: "hidden",
        margin: 5,
      }}
    >
      <LinearGradient
        colors={["#bdc6d4", "#14213D12"]}
        start={{x: 0, y: 1}}
        style={{ width: "500%", height: "100%" }}
      >
        <View style={{padding: 10}}>
          <Text style={styles.time}>{countdown}</Text>
          <Text style={styles.competitionHeading}>{heading}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </LinearGradient>
      {/* <GoProButton /> */}
    </ImageBackground>
  );
};

export default CompetitionCard;
