import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import ResultsList from '../components/ResultsList'

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, errorMessage, results] = useResult();

  const filterResultsByPrice = (price) => {
    return results.filter(results => {
      return results.price === price;
    })
  }

  return (
    <View style={{flex:1, backgroundColor:'#B8C9C6'}}>
      <SearchBar term={term} onTermChange={(newterm) => setTerm(newterm)}
        onTermSubimt={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" navigation={navigation} />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" navigation={navigation} />
        <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" navigation={navigation} />
        
      </ScrollView>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})