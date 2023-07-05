import { ImageBackground, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../utils/colors";
import { Chip } from "@rneui/themed";
import { styles } from "./CompetitionCard.style";
import { Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import Timer from "../Timer/Timer";

const CompetitionCard = ({ heading, address, countdown, banner }) => {
  const timestamp = countdown;

  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const {hours, minutes, seconds } = remainingTime;

  useEffect(() => {
    console.log(timestamp);
    const calcTimeRemaining = () => {
      let currentDate = new Date();
      let timestampDate = new Date(timestamp * 1000);
      let timeDifference = Math.floor((timestampDate - currentDate) / 1000);

      let hours = +Math.floor(timeDifference / 3600);
      let minutes = +Math.floor((timeDifference % 3600) / 60);
      let seconds = +Math.floor(timeDifference % 60);
      hours < 0 ? (hours = 0) : hours < 10 ? (hours = "0" + hours) : hours;
      minutes < 0
        ? (minutes = 0)
        : minutes < 10
        ? (minutes = "0" + minutes)
        : minutes;
      seconds < 0
        ? (seconds = 0)
        : seconds < 10
        ? (seconds = "0" + seconds)
        : seconds;
      setRemainingTime({
        hours,
        minutes,
        seconds,
      });
    };


    const timer = setInterval(calcTimeRemaining, 1000);
    calcTimeRemaining();

    return () => clearInterval(timer);
  }, []);

  return (
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
        colors={["#e5e8ed", "#14213D00"]}
        start={{ x: 0.4, y: 0.9 }}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ padding: 10 }}>
          <Timer countdown={remainingTime} />
          <Text style={styles.competitionHeading}>{heading}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </LinearGradient>
      {/* <GoProButton /> */}
    </ImageBackground>
  );
};

export default CompetitionCard;
