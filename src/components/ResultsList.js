import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }
    return (
        <View style={styles.container} >
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => { result.id }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultShow', { id: item.id })}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default ResultsList

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 7
    },
    container: {
        marginBottom: 25,
    },
})