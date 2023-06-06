import { Text, View } from 'react-native';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';

export default function Register() {

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
                <Button title={"Cadastrar"} titleColor={"white"} color={"red"} />
                
            </View>
        </View>
    )
}