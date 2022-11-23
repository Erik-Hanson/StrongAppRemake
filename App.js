import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Heading } from "native-base";
import React, { useState, useEffect, useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import Footer from "./components/Footer.js"
import {StartWorkoutButton} from "./components/Buttons.js"

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    try {
      async function prepare() {
        // Keep the splash screen visible
        await SplashScreen.preventAutoHideAsync();
        // Do what you need before the splash screen gets hidden
        console.log("I'm a task that gets executed before splash screen disappears");
        setTimeout(async () => {
          setAppIsReady(true);
          await SplashScreen.hideAsync();
        }, 1000);
      }
      prepare();
    } catch (err) {
      throw (err);
    }
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Hide the splash screen
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <></>;
  }

  const SiteHeading = () => {
    return (
      <Heading size="xl">Home Screen</Heading>
    )
  }

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <SiteHeading style={styles.heading}></SiteHeading>
        <StartWorkoutButton></StartWorkoutButton>
        <StatusBar style="auto" />
      </View>
      <View style={styles.footer}>
        <Footer></Footer>
      </View>
    </NativeBaseProvider>
  );


}

const styles = StyleSheet.create({
  heading: {

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
});
