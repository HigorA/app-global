import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import Header from '../../components/Header';

export default function Unity({route}) {

    const { id } = route.params;

    const [unidade, setUnidade] = useState({});

    useEffect(() => {
        axios.get(`http://192.168.0.107:8080/unidade/id/${id}`)
        .then((resposta) => {
            console.log(resposta.data);
            setUnidade(resposta.data)
        })
        .catch((error) => console.log(error))
        .finally(() => {
            
            console.log(unidade.endereco)})
    }, [])

    return (
        <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <Header />
            <View 
                style={{
                    width: '80%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: '#efeac3',
                    padding: 12,
                    borderRadius: 12,
                    marginVertical: 40
                }}
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
                    {unidade.endereco && (
                        <Text style={{ fontSize: 16 }}>{unidade.endereco.bairro} - {unidade.endereco.uf}</Text>
                    )}

                    <Text style={{fontSize: 14}}>{unidade.status}</Text>
                </View>
            </View>
            <View style={{width: '80%', justifyContent: 'center', alignItems: 'center', borderRadius: 12}}>
                <Image 
                    style={{resizeMode: 'contain', width: 450, height: 500, borderRadius: 12}}
                    source={require('./../../../assets/mapa.png')} 
                />
            </View>
        </View>
    )
}