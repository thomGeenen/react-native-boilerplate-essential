import React, { FunctionComponent } from 'react';
import {
    SafeAreaView,
    StatusBar,
    ScrollView,
    View, 
    Text
} from 'react-native';

import { Header } from 'react-native/Libraries/NewAppScreen';

export const App: FunctionComponent = ({children}) => {
    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    <Text>Hello this is a boilerplate</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default App;