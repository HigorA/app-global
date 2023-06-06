import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../components/Button";
import FormInput from "../../components/FormInput";

export default function Sign() {

    const [login, setLogin] = useState('a');
    const [senha, setSenha] = useState('a');

    const navigation = useNavigation();

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
                />
                <FormInput 
                    placeholder={"Senha"} 
                    icon={"lock-outline"} 
                    secureTextEntry={true} 
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