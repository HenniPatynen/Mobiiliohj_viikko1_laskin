import { TextInput, View, Button } from "react-native";
import { useState } from "react";

function laskin(){

    const[nro1, setNro1] = useState('');
    const[nro2, setNro2] = useState('');

    const plusTulos =nro1 + nro2;
    const miinusTulos =nro1 - nro2;
   

    const pressed =()=>{
    Alert.alert('Tulos on' )
  };

    return(
        <View style={styles.container}>
            <TextInput>
                style={{ width: 200, borderColor: 'grey', borderWidth: 2 }}
                onChangeText={nro => setNro1(nro)}
                value={nro1}
            </TextInput>
            <TextInput>
                    style={{ width: 200, borderColor: 'grey', borderWidth: 2 }}
                    onChangeText={nro => setNro2(nro)}
                    value={nro2}
                </TextInput>

            <Button
            title="+"
            onPress = {pressed + plusTulos}    
            />

            <Button
            title="-"
            onPress = {pressed + miinusTulos}    
            />
            
            
        </View>

    )

} export default laskin;