import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubimt}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
            style={styles.inputStyle} 
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            autoCapitalize='none'
            autoCorrect={false}
            onEndEditing={onTermSubimt}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#E7E7E7',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginVertical:10

    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        color:'black',
        fontSize:30,
        marginHorizontal:10,
        alignSelf:'center'
    }
})