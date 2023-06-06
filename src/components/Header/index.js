import { useNavigation } from "@react-navigation/native";
import { Text, View, Pressable } from "react-native";

export default function Header() {

    const navigation = useNavigation();

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
                    Sou uma Ong
                </Text>
            </Pressable>
        </View>
    )
}