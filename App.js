//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import { Text } from 'react-native';

export default function App() {

  const[nro1, setNro1] = useState('');
  const[nro2, setNro2] = useState('');

  const [vastaus, SetVastaus] = useState('')

  const plusTulos =parseInt(nro1) + parseInt(nro2);
  const miinusTulos =nro1 - nro2;
 

  const pressedPlus =()=>{
  SetVastaus('Tulos on ' +plusTulos)
};

const pressedMiinus =()=>{
  SetVastaus('Tulos on ' + miinusTulos)
};




return(
    <View style={styles.container}>
        <Text>{vastaus}</Text>
        <TextInput
            style={{ width: 200, borderColor: 'grey', borderWidth: 2 }}
            onChangeText={nro1 => setNro1(nro1)}
            value={nro1}
            keyboardType="numeric"
        />
        <TextInput
                style={{ width: 200, borderColor: 'grey', borderWidth: 2 }}
                onChangeText={nro2 => setNro2(nro2)}
                value={nro2}
                keyboardType="numeric"
           />
      <View style={styles.buttons}>
        <Button
        title="+"
        onPress = {pressedPlus} 
        />
      <Text>   </Text>
        <Button
        title="-"
        onPress = {pressedMiinus}
        />
        </View>

        
    </View>

);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10
  },
  numpad: {
    flex: 3,
    flexDirection: 'row'
  }
});


