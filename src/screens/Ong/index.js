import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Header from '../../components/Header';
import OngContainer from '../../components/OngContainer';
import axios from 'axios';



export default function Ong({route}) {

    const { id } = route.params;

    const [unidades, setUnidades] = useState([]);

    useEffect(() => {
        axios.get(`http://192.168.0.107:8080/unidade/${id}`)
        .then((resposta) => {
            console.log(resposta.data.content);
            setUnidades(resposta.data.content);
        })
        .catch((error) => console.log(error))
    }, [])

    return (
        <View 
            style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
            }}>
            <Header />
            <View style={{
                width: '80%',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 40,
                backgroundColor: '#efeac3',
                padding: 10,
                borderRadius: 12
            }}>
                <View 
                    style={{
                    width: 65,
                    height: 65,
                    borderColor: 'black',
                    borderWidth: 2,
                    borderRadius: 12,
                    backgroundColor: '#776262'}}
                />
                <View>
                    <Text>Ong Name  {id}</Text>
                </View>
            </View>
            <Text>Unidades</Text>
            
                {unidades.map((unidade, key) => (    
                    <View  key={key} style={{marginVertical: 10, width: '80%'}}>
                        <OngContainer ongId={unidade.id} ongName={unidade.endereco.bairro} message={"Ver localização"} type={"abc"}/>
                    </View>
                ))}
                
                
            
            <View>

            </View>
        </View>
    )
}