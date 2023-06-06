import { TextInput, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function FormInput({placeholder, icon, ...rest}) {

    return (
        <View style={{
            borderWidth: 2,
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16
        }}>
            <MaterialCommunityIcons name={icon} size={24} color="black" />
            <TextInput 
                placeholder={placeholder}
                style={{
                    paddingHorizontal: 20, 
                    paddingVertical: 10,   
                    width: '100%' 
                }} 
                {...rest}
            />
        </View>
    )

}