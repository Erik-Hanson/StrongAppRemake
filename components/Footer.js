import { Box, HStack, Pressable } from 'native-base'
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Octicons } from "@expo/vector-icons"

export const Footer = (props) => {
  return (
    <Box alignItems="center" alignSelf="center" width="100%">
      <HStack alignItems="center">
        <Pressable style={{ marginRight: 10 }}>
          <MaterialCommunityIcons name="arm-flex" size={40} color="black" onPress={() => props.navigation.navigate('Home')}/>
        </Pressable>
        <Pressable style={{ marginRight: 10 }}>
          <MaterialIcons name="account-circle" size={40} color="black" onPress={() => props.navigation.navigate('Account')}/>
        </Pressable>
        <AntDesign style={{ marginRight: 10 }} name="plus" size={40} color="black" />
        <Octicons name="history" size={40} color="black" onPress={() => props.navigation.navigate('History')}/>
      </HStack>
    </Box>
  );
}


export default Footer;
