import { Text, View, Image, Button } from 'react-native';
import styles from './style'

export default function Home({ navigation }) {


    return (
        <View style={styles.wrapper}>
            <Button title='Get started' onPress={() => navigation.navigate('Sign in')}></Button>
        </View >
    );
}