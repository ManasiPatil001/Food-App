import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const ResultsDetail = ({result}) => {
  //console.log(result)
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={{uri:result.image_url}} style={styles.image}/>
      <Text style={styles.name}>{result.name}</Text>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
    </ScrollView>
  )
}

export default ResultsDetail

const styles = StyleSheet.create({
  container:{
    marginLeft:15,

  },
  image:{
    width:250,
    height:140,
    borderRadius:7,
    marginBottom:5,
  },
  name:{
    fontWeight:'bold',
  }
})