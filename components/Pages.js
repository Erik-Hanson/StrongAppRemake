import { StyleSheet, View, Text } from 'react-native';
import { Button, NativeBaseProvider } from 'native-base';
import { Footer } from './Footer';

export const Home = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
            <View style={styles.footer}>
                <Footer navigation={navigation}></Footer>
            </View>
        </NativeBaseProvider>
    );
}

export const History = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Text>History</Text>
            </View>
            <View style={styles.footer}>
                <Footer navigation={navigation}></Footer>
            </View>
        </NativeBaseProvider>
    );
}


export const Account = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Text>Account</Text>
            </View>
            <View style={styles.footer}>
                <Footer navigation={navigation}></Footer>
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
        marginBottom: 25
    }
});