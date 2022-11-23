import {Box, HStack, Pressable} from 'native-base'
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Octicons } from "@expo/vector-icons" 

export const Footer = () => {
    return (<Box alignItems="center" alignSelf="center" width="100%">
      <HStack alignItems="center">
        <Pressable>
          <MaterialCommunityIcons name="arm-flex" size={40} color="black" />
        </Pressable>
        <Pressable>
          <MaterialIcons name="account-circle" size={40} color="black" />
        </Pressable>
        <AntDesign name="plus" size={40} color="black" />
        <Octicons name="history" size={40} color="black" />
      </HStack>
    </Box>);
}


export default Footer;
