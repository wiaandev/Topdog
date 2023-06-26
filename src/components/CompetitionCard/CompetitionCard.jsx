import { Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../utils/colors";
import { Chip } from "@rneui/themed";
import { styles } from "./CompetitionCard.style";
import { Icon } from "@rneui/themed";

const CompetitionCard = ({ heading, address, countdown }) => {
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
    <View style={styles.container}>
        <Text style={styles.time}>{countdown}</Text>
        <Text style={styles.competitionHeading}>{heading}</Text>
        <Text style={styles.address}>{address}</Text>
      <Icon
        name="chevron-right"
        type="material"
        color={COLORS.blue}
      />
    </View>
  );
};

export default CompetitionCard;
