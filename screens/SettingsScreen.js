import * as React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';


export default function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>

            <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'}
                ]}
                renderItem={({item}) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>{item.key}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    itemContainer: {
        marginHorizontal: 10,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 3,
        justifyContent: 'center',
        paddingHorizontal: 30,
        marginBottom: 12
    },
    text: {
        fontSize: 18,
        fontWeight: '400',
        color: '#080808'
    }
});
