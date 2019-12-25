import React from 'react'
import {
    Text,
    View,
} from 'react-native'
export default function TestScreen (){
    return(
        <View>
            <Text>
                test roter
            </Text>
        </View>
    )
}
TestScreen.navigationOptions = {
    title:'Test'
}
