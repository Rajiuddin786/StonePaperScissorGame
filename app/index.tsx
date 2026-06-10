import React,{ useState,useEffect } from "react";
import { Text, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./css/indexStyles";
import ButtonSign from "./components/button";



export default function Index() {
  const signs=["rock","paper","scissors"];
  const [isPressed,setIsPressed]=useState(false);
  const [pressedButton,setPressedButton]=useState("");
  const [result,setResult]=useState("");

  useEffect(()=>{
    if(isPressed){
      const botChoice=(signs[Math.floor(Math.random()*signs.length)]);
      if(botChoice === "rock" && pressedButton === "scissors" || botChoice === "paper" && pressedButton === "rock" || botChoice === "scissors" && pressedButton === "paper"){
        setResult("You lose! Bot chose "+botChoice);
      }else{
        setResult("You win! Bot chose "+botChoice);
      }
    }
    const setTimer = setTimeout(() => {
      setIsPressed(false);
      setResult("");
    }, 8000);
  },[isPressed]);

  return (
    <SafeAreaView>
    {signs.map((sign,index)=>(
      <ButtonSign key={index} isPressed={setIsPressed} name={sign} setPressedButton={setPressedButton}/>
    ))}
    {isPressed && <Text style={{ fontSize: 20, marginTop: 20 }}>{result}</Text>}
    </SafeAreaView>
  );
}
