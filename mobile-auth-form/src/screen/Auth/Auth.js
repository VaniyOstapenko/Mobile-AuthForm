import { Text, View, Image, TextInput, Button } from 'react-native';
import styles from './style'
import { useState } from 'react';


export default function Auth({ navigation }) {
    const [inp, setInp] = useState({ email: '', password: '' })

    function changeValue(val, name) {
        setInp({ ...inp, [name]: val })
    }

    function checkInp() {
        try {
            console.log(inp.email);
            console.log(inp.password);
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

    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.inp} onChangeText={(val) => changeValue(val, 'email')} placeholder='Email'></TextInput>
            <TextInput style={styles.inp} onChangeText={(val) => changeValue(val, 'password')} placeholder='Password' secureTextEntry={true}></TextInput>
            <Text>Don’t have an account ? <Text onPress={() => navigation.navigate('Sign up')}>Sign Up</Text></Text>
            <Button title='Login' onPress={checkInp}></Button>
        </View >
    );
}

