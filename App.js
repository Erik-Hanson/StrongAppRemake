import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Heading, Button } from "native-base";


export default function App() {
  const SiteHeading = () => {
    return (
      <Heading size="4xl">STRONGER</Heading>
    )
  }
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <SiteHeading></SiteHeading>
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
