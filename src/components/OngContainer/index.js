import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';

export default function OngContainer({ongId, ongName, message, type = "ong"}) {
    
    const navigation = useNavigation();
    
    return (
        <Pressable 
            style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#efeac3',
                padding: 12,
                borderRadius: 12
            }}
            onPress={() => {
                if (type == "ong") {
                    navigation.navigate('Ong', { id: ongId})
                } else {
                    navigation.navigate('Unity', { id: ongId})
                }}}
        >
            <View style={{
                width: 65,
                height: 65,
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 12,
                backgroundColor: '#776262'
            }}/>
            <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
                <Text style={{fontSize: 16}}>{ongName}</Text>
                <Text style={{fontSize: 14}}>{message}</Text>
            </View>
        </Pressable>
    )
}