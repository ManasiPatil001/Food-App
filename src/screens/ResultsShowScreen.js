import { StyleSheet, Text, View, FlatList, Image, SafeAreaView } from 'react-native';
import React, { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
    const [result, setResult] = useState(null);
    //console.log(result)

    const id = route.params.id;
    //console.log(id)

    const getResult = async (id) => {
        const responce = await yelp.get(`/${id}`);
        setResult(responce.data);
    }
    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }

    return (
        <SafeAreaView style={{backgroundColor: '#DFD1FF', flex:1 }} >
        <View>
            <Text style={{ fontSize: 20, fontWeight: '800', alignSelf: 'center' }}>{result.name}</Text>

            <View>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
            </View>
            <Text style={{ fontSize: 20, fontWeight: '800', alignSelf: 'center', marginTop:30 }}>{result.alias}</Text>

            
        </View>
        </SafeAreaView>
    )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 200,
        marginTop: 10,
        borderRadius: 7,
        alignSelf: 'center'
    }
})