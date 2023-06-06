import { Text, View } from 'react-native';

export default function UnityContainer({ongId, ongName}) {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#efeac3',
            padding: 12,
            borderRadius: 12
        }}>
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
                <Text style={{fontSize: 14}}>Ver Unidades</Text>
            </View>
        </View>
    )
}