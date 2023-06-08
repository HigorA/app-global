import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function Header() {

    const navigation = useNavigation();
    const [isAuth, setIsAuth] = useState(false);
    const [selector, setSelector] = useState(null);
    
    const isLogged = async () => {
        const value = await AsyncStorage.getItem("@storage_Key")
        if (value != null) {
            setIsAuth(true)
            setSelector(JSON.parse(value)) 
        }
    }

    useEffect(() => {
        console.log(selector)
        isLogged()
    }, [])

    return (
        <View style={{
            width: '100%',
            backgroundColor: 'white', 
            alignItems: 'flex-end', 
            justifyContent: 'center', 
            paddingHorizontal: 50,
            paddingVertical: 30,
            borderBottomWidth: 1,
            borderBottomColor: 'red'
            }}>
            <Pressable onPress={() => navigation.navigate('Sign')}>
                <Text style={{color: '#006CD0'}}>
                    {!isAuth ? "Sou uma Ong" : "logado"}
                </Text>
            </Pressable>
        </View>
    )
}