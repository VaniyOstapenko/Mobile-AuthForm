import { Text, View, Image, Button, TextInput } from 'react-native';
import styles from './style'
import { useEffect, useState } from 'react';
import * as Font from 'expo-font'

const loadFont = async () => {
    await Font.loadAsync({
        Inter400: require('../../assets/fonts/Inter-Regular.ttf'),
        Inter700: require('../../assets/fonts/Inter-Bold.ttf')
    })
}

export default function Reg({ navigation }) {
    const [inp, setInp] = useState({ name: '', surname: '', email: '', password: '' })

    function changeValue(val, name) {
        setInp({ ...inp, [name]: val })
    }

    function checkInp() {
        try {
            console.log(inp.name);
            console.log(inp.surname);
            console.log(inp.email);
            console.log(inp.password);
            if (!/^[A-Z]+[a-z]+$/gm.test(inp.name)) throw new Error('Неверный ввод имени')
            if (!/^[A-Z]+[a-z]+$/gm.test(inp.surname)) throw new Error('Неверный ввод фамилии')
            if (!inp.email.trim()) throw new Error('Отсутствует ввод почты')
            if (!inp.password.trim()) throw new Error('Не ввели пароль')
            if (inp.password < 8) throw new Error('Пароль меньше 8 символов')
            if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/gm.test(inp.password)) throw new Error('Password is invalid');
            if (!/^[A-z0-9\.\+\_\-]+@[a-z\.]+\.[a-z]{2,4}$/gm.test(inp.email)) throw new Error('Не верный ввод почты')
            console.log(`success ${inp}`);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        loadFont()
    }, [])

    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.inp} onChangeText={(val) => changeValue(val, 'name')} placeholder='First name'></TextInput>
            <TextInput style={styles.inp} onChangeText={(val) => changeValue(val, 'surname')} placeholder='Last name'></TextInput>
            <TextInput style={styles.inp} onChangeText={(val) => changeValue(val, 'email')} placeholder='Email'></TextInput>
            <TextInput style={styles.inp} onChangeText={(val) => changeValue(val, 'password')} placeholder='Password' secureTextEntry={true}></TextInput>
            <Text style={styles.already}>Already have an account ? <Text onPress={() => navigation.navigate('Sign in')}>Sign In</Text></Text>
            <Text style={styles.agree} onPress={checkInp}>Agree and continue</Text>
        </View >
    );
}