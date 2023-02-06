
import { StyleSheet, TextInput, View, Button } from 'react-native';
import React, { useRef, useState } from 'react';
import { Text } from 'react-native';

export default function Calculator({navigation}) {

  const[nro1, setNro1] = useState('');
  const[nro2, setNro2] = useState('');

  const [vastaus, SetVastaus] = useState('')

  const initialFocus = useRef(null);

const [data, setData]=useState([]);
 
//painaminen
  const pressedPlus =()=>{
  const plusTulos =parseInt(nro1) + parseInt(nro2);
  SetVastaus('Tulos on ' +plusTulos)
  const text= nro1 + ' + ' + nro2 + ' = ' + plusTulos;

  setData([...data, {key: text}]);

  setNro1('');
  setNro2('');

  initialFocus.current.focus();
    
};

const pressedMiinus =()=>{
  const miinusTulos =nro1 - nro2;
  SetVastaus('Tulos on ' + miinusTulos)
  const text =nro1 + ' - ' + nro2 + ' = ' + miinusTulos;
  
  setData([...data, {key: text}]);

  setNro1('');
  setNro2('');

  initialFocus.current.focus();
};

return(
    <View style={styles.container}>
      <Text style={styles.title}>Laskin</Text>
        <Text>{vastaus}</Text>
        <TextInput
            style={styles.input}
            ref={initialFocus}
            onChangeText={nro1 => setNro1(nro1)}
            value={nro1}
            keyboardType={'numeric'}
        />
        <TextInput
                style={styles.input}
                onChangeText={nro2 => setNro2(nro2)}
                value={nro2}
                keyboardType="numeric"
           />
     <View style={styles.buttons}>
        <Button
        title="+"
        onPress = {pressedPlus} 
        color ={'hotpink'}
        />
     
        <Button
        title="-"
        onPress = {pressedMiinus}
        color ={'hotpink'}
        />
        <Button
        title= "History"
        color={'purple'}
        onPress={()=> navigation.navigate('historia', {data})}
        //onPress={()=> this.props.navigation.navigate('historia', {data})}
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
    marginTop: 0
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-evenly',
    width: '40%'
  },
  input: {
    width: 200, 
    borderColor: 'pink', 
    borderWidth: 4 
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 5
  }

});


