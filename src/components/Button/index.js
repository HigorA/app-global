import { Pressable, Text } from "react-native";

export default function Button({title, titleColor, color, colorBorder="red", ...rest}) {

    return (
        <Pressable style={{
            width: '100%',
            height: 71,
            backgroundColor: `${color}`,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            borderColor: `${colorBorder}`,
            borderWidth: 2
        }}
            {...rest}
        >
            <Text style={{
                fontSize: 24,
                fontWeight: 700,
                color: `${titleColor}`
            }}>{title}</Text>
        </Pressable>
    )
}