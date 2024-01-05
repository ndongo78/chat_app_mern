import {StyleProp, TextStyle, TouchableOpacity} from "react-native";
import React from "react";

interface Props {
    textContent: React.ReactNode;
    handlePress:()=>void;
    style: StyleProp<TextStyle>
}
const Button=({textContent,handlePress,style}:Props)=>{
    return(
        <TouchableOpacity style={style} onPress={handlePress}>
            {textContent}
        </TouchableOpacity>
    )
}
export default Button