/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react'
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native'

export default function HomeScreen(props) {

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View style={styles.welcomeContainer}>
                    <Text >
                        Welkome to home Screen
                    </Text>
                    <Button
                        title="Go to Details"
                        onPress={() => props.navigation.navigate('Test')}
                    />

                </View>
            </ScrollView>
        </View>
    )
}

HomeScreen.navigationOptions = {
    title: 'home'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    }
})
