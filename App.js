
import { StyleSheet, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native';

export default function App() {

  const[nro1, setNro1] = useState('');
  const[nro2, setNro2] = useState('');

  const [vastaus, SetVastaus] = useState('')

  const plusTulos =parseInt(nro1) + parseInt(nro2);
  const miinusTulos =nro1 - nro2;

  //historia
const [text, setText]=useState('');
const [data, setData]=useState([]);
 
//painaminen
  const pressedPlus =()=>{
  SetVastaus('Tulos on ' +plusTulos)
  setText(nro1 + ' + ' + nro2 + ' = ' + plusTulos);
  setData([...data, {key: text}]);
    
};

const pressedMiinus =()=>{
  SetVastaus('Tulos on ' + miinusTulos)
  setText(nro1 + ' - ' + nro2 + ' = ' + miinusTulos);
  setData([...data, {key: text}]);
    
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
        <FlatList
          data={data}
          renderItem={({ item}) => <Text>{item.key}</Text>}/>

        
    </View>

);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10
  }
});


