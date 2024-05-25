import { Text, View } from 'react-native';
import styles from './style'
import * as Font from 'expo-font'
import { useEffect } from 'react';

const loadFont = async () => {
    await Font.loadAsync({
        Inter400: require('../../assets/fonts/Inter-Regular.ttf'),
        Inter700: require('../../assets/fonts/Inter-Bold.ttf')
    })
}

export default function Home({ navigation }) {
    useEffect(() => {
        loadFont()
    }, [])

    return (
        <View style={styles.wrapper}>
            <Text style={styles.textHome} onPress={() => navigation.navigate('Sign in')}>Get started</Text>
        </View >
    );
}