import React from 'react';
import { View, Text, StyleSheet } from'react-native';
import { FlatList } from 'react-native';


export default function History (navigation, route){

    const {data}= route.params;
    //const data = this.props.navigation.getParam('data', {});
    console.log(data);
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>History</Text>
                
                <FlatList
                  data={data}
                  keyExtractor={(item, index)=>index}
                  renderItem={({ item}) => {
                  return <Text>{item.key}</Text>}
                    }/>
                    

        </View>
    )};
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 0
        },
        title: {
          fontWeight: 'bold',
          fontSize: 25,
          margin: 5
        }
    });