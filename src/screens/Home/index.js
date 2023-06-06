import { ScrollView, Text, View } from "react-native";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import UnityContainer from "../../components/UnityContainer";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function Home() {

    const [ongs, setOngs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/ong')
        .then((resposta) => {
            console.log(resposta.data.content);
            setOngs(resposta.data.content);
        })
        .catch((error) => console.log(error))
    }, [])

    return (
        <View style={{alignItems: 'center', flex: 1}}>
            <Header />
            <SearchBar iconName={"microphone-settings"}/>
            <ScrollView style={{width: '100%', paddingTop: 20}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
                {ongs.map((ong, key) => (
                    <View key={key} style={{marginVertical: 10, width: '80%'}}>
                        <UnityContainer ongName={ong.razaoSocial}/>
                    </View>    
                ) )}
            </ScrollView>
        </View>
    )
}