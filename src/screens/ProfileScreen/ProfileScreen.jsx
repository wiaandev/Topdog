import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import { Button } from "@rneui/themed";
import {styles} from './ProfileScreen.style';
import { onLogOut } from "../../services/firebase-auth";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../context/User.context";

const ProfileScreen = () => {

  const {loggedInUser} = useContext(UserContext);

  const navigator = useNavigation();

  const onSignOut = () => {
    onLogOut();
    navigator.navigate('Login');
  }

  return (
    <SafeAreaView>
      <ProfileHeader username={loggedInUser.displayName} profileImg={loggedInUser.photoURL} navigateProp={() => navigator.navigate("Home")}/>
      <View style={styles.content}>
        <Button
          title={"Log Out"}
          buttonStyle={styles.button}
          containerStyle={styles.button2}
          titleStyle={{ fontFamily: "epilogueRegular" }}
          onPress={onSignOut}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

