import * as React from 'react';
import { Text, View } from 'react-native';
import {Button} from "react-native-web";
import { useNavigation } from '@react-navigation/native';

export default function NotificationsScreen() {


    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications!</Text>
            <Button
                title="Back"
                onPress={() => {
                    navigation.goBack();
                }}
            />
        </View>
    );
}

