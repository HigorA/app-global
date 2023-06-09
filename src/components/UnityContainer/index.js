import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';
import axios from 'axios';


export default function UnityContainer({unityId}) {
    
    const navigation = useNavigation();
    
    return (
        <View 
            style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#efeac3',
                padding: 12,
                borderRadius: 12
            }}
            onPress={() => navigation.navigate('Ong', { id: ongId})}
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
                <Text style={{fontSize: 16}}>{unidade.endereco.bairro}</Text>
                <Text style={{fontSize: 14}}>{unidade.status}</Text>
            </View>
        </View>
    )
}