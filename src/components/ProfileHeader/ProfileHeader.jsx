import { Pressable, Text, View } from "react-native";
import React from "react";
import { Avatar, Button, Icon } from "@rneui/themed";
import { styles } from "./ProfileHeader.style";

const ProfileHeader = ({ username, profileImg, navigateProp }) => {
  const profilePic =
    "https://images.unsplash.com/photo-1684068471818-eb1b89b845d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
  return (
    <View style={styles.container}>
      <Pressable onPress={navigateProp}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Icon type="material" name="arrow-left" />
          <Text>Go Back</Text>
        </View>
      </Pressable>
      <View style={styles.headerContent}>
        <Avatar
          source={{
            uri: profileImg,
          }}
          rounded
          containerStyle={styles.profileImg}
          size={100}
        />
        <Text style={styles.username}>{username}</Text>
        <Text>No bio...</Text>
        <Button type="outline" title={"Edit Profile"} />
      </View>
    </View>
  );
};

export default ProfileHeader;
