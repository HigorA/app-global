import { useState } from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import axios from 'axios';

export default function Register() {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin() {
        axios.post('http://localhost:8080/auth/signup', {
            "login": login,
            "password": senha
        }).then((resposta) => {
            console.log(resposta.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'
        }}>
            <View style={{
                position: 'absolute',
                top: 100,
                alignItems: 'center',
                gap: 10
            }}>
                <Text style={{
                    fontSize: 96
                }}>
                    Olá
                </Text>
                <Text style={{
                    fontSize: 24
                }}>
                    Crie a sua conta
                </Text>
            </View>
            <View style={{
                width: '80%',
                gap: 30,
                paddingTop: 150,
                paddingBottom: 40
            }}>
                <FormInput 
                    placeholder={"E-mail"} 
                    icon={"account-outline"} 
                    onChangeText={(e) => setLogin(e)}
                />
                <FormInput 
                    placeholder={"Senha"} 
                    icon={"lock-outline"} 
                    secureTextEntry={true} 
                    onChangeText={(e) => setSenha(e)}
                />
            </View>
            <View style={{
                width: '80%',
                gap: 20
            }}>
                <Button title={"Cadastrar"} titleColor={"white"} color={"red"} onPress={() => handleLogin()} />
                
            </View>
        </View>
    )
}