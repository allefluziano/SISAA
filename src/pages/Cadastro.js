import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Cadastro extends React.Component{
    static navigationOptions = {
        title: 'Sisaa',
      };
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Sisaa o que é?</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
    }
});