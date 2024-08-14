import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function OptionCard({option,selectedTraveller}) {
  return (
    <View style={
[            {padding:15,
                borderColor:'black',
                borderWidth:2,
                borderBottomWidth:1,
                marginVertical:1,
                borderBottomStartRadius:12,
                borderBottomEndRadius:12,
                borderTopLeftRadius:12,
                borderTopRightRadius:12,
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                
            },selectedTraveller==option&&{borderWidth:5,shadowColor:'black'}]
    }>

        
<View>
<Text
      
      
      style={{
        fontSize:15,
        fontWeight:'800'
      }}>{option?.title}</Text>
        <Text
      
      
      style={{
        fontSize:13,
        fontWeight:'500'
      }}>{option?.description}</Text>
</View>
<View>

<Text
      
      
      style={{
        fontSize:35,
        fontWeight:'800'
      }}>{option?.icon}</Text>

</View>
     
    </View>
  )
}