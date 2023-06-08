import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/loginSlice";

export default function Sign() {

    const [login, setLogin] = useState('a');
    const [senha, setSenha] = useState('a');

    const navigation = useNavigation();
    const dispatch = useDispatch();

    async function handleLogin() {
        axios.post('http://localhost:8080/auth/signin', {
            "login": login,
            "password": senha
        }).then((resposta) => {
            console.log(JSON.stringify(resposta.data));
            if (resposta.status == 200) {
                console.log("ok")
                AsyncStorage.setItem('@storage_Key', JSON.stringify(resposta.data)).catch(error => console.log(error))
                dispatch(setUser(resposta.data))
                navigation.navigate('Home');
            }
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
                    Entre com a sua conta
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
                    onChangeText={(v) => setLogin(v)}
                />
                <FormInput 
                    placeholder={"Senha"} 
                    icon={"lock-outline"} 
                    secureTextEntry={true} 
                    onChangeText={(v) => setSenha(v)}
                />
            </View>
            <View style={{
                width: '80%',
                gap: 20
            }}>
                <Button 
                    title={"Entrar"} 
                    titleColor={"white"} 
                    color={"red"}
                    onPress={() => handleLogin()} 
                />
                <Button 
                    title={"Cadastro"} 
                    titleColor={"black"} 
                    color={"white"} 
                    colorBorder={"black"}
                    onPress={() => navigation.navigate('Register')} 
                />
            </View>
        </View>
    )
}