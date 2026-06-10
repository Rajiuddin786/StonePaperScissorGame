import React from 'react'
import {TouchableOpacity,Text} from "react-native";

import { styles } from "../css/components";

type ButtonSignProps = {
  isPressed: (value: boolean) => void;
  name: string;
  setPressedButton: (value: string) => void;
};

const ButtonSign = ({isPressed,name,setPressedButton}:ButtonSignProps) => {
  return (
    <TouchableOpacity style={styles.button}
      onPress={() => {
        isPressed(true);
        setPressedButton(name)
    }}
    >
    <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  )
}

export default ButtonSign