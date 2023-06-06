import { Pressable, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';
import { useEffect, useState } from 'react';
import * as FileSystem from 'expo-file-system';
import * as Speech from 'expo-speech';

const RECORDING_OPTIONS = {
    android: {
        extension: '.mp3',
        outputFormat: Audio.AndroidOutputFormat.MPEG_4,
        audioEncoder: Audio.AndroidAudioEncoder.AAC,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
    },
    ios: {
        extension: '.wav',
        audioQuality: Audio.IOSAudioQuality.HIGH,
        sampleRate: 44100,
        numberOfChannels: 1,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
    },
    web: {
  
    }
};

export default function SearchBar({iconName}) {
    
    const [isConvertingSTT, setIsConvertingSTT] = useState(false);
    const [toastMessage, setToastMessage] = useState(null);
    const [recording, setRecording] = useState(null);
    const [description, setDescription] = useState('');
    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {
        Audio
          .requestPermissionsAsync()
          .then((granted) => {
            if (granted) {
                Audio.setAudioModeAsync({
                    allowsRecordingIOS: true,
                    interruptionModeIOS: InterruptionModeIOS.DoNotMix,
                    playsInSilentModeIOS: true,
                    shouldDuckAndroid: true,
                    interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
                    playThroughEarpieceAndroid: true,
              });
            }
        });
        
    }, []);

    const speak = (termo) => {
        const thingsToSay = `Você quer pesquisar por ${termo}, entretanto, ainda não posso fazer pesquisas. Sinto Muito!`
        Speech.speak(thingsToSay);
    }

    async function handleRecordingStart() {
        const { granted } = await Audio.getPermissionsAsync();

        if ( granted ) {
            try {
                setIsRecording(true);
                setToastMessage('Gravando...')

                const { recording } = await Audio.Recording.createAsync(RECORDING_OPTIONS);
                setRecording(recording);
            } catch (error) {
                console.log(error);
            }
        }
    }

    async function handleRecordingStop() {
        try {
            setToastMessage(null);

            await recording.stopAndUnloadAsync();
            const recordingFileUri = recording.getURI();
            
            if (recordingFileUri) {
                const base64File = await FileSystem.readAsStringAsync(recordingFileUri, { encoding: FileSystem?.EncodingType?.Base64 });
                
                setIsRecording(false);
                setRecording(null);
                getTranscription(base64File);
                await FileSystem.deleteAsync(recordingFileUri);
            } else {
                Alert.alert("Audio", "Não foi possível obter a gravação.");
            }
        } catch (error) {
                console.log(error);
        }
    }

    function getTranscription(base64File) {
        setIsConvertingSTT(true);
    
        fetch(`https://speech.googleapis.com/v1/speech:recognize?key=AIzaSyBEtY_UZuWZlmNa4rKlT1KDENEwgdHdGk4`, {
          method: 'POST',
          body: JSON.stringify({
            config: {
                languageCode: "pt-BR",
                encoding: "WEBM_OPUS",
                sampleRateHertz: 48000,
            },
            audio: {
              content: base64File
            }
          })
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data.results[0].alternatives[0].transcript);
            speak(data.results[0].alternatives[0].transcript)
        })
        .catch((error) => console.log(error))
        .finally(() => setIsConvertingSTT(false))
    }

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 24,
            height: 62,
            width: '80%',
            borderWidth: 2,
            borderRadius: 12,}}>
            <TextInput placeholder='Digite  aqui' style={{
                width: '80%',
                backgroundColor: 'white',
                height: '100%',
                paddingHorizontal: 12,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12
            }}/>
            <Pressable 
            onPressIn={() => handleRecordingStart()}
            onPressOut={() => handleRecordingStop()}
            style={{
                width: '20%',
                height: '100%',
                backgroundColor: '#776262',
                borderTopRightRadius: 9,
                borderBottomRightRadius: 9,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <MaterialCommunityIcons name={iconName} size={24} color="black" />
            </Pressable>
        </View>
    )
}