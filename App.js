
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import PostsScreen from './screens/Posts'
import DetailsScreen from './screens/Details'
import Induser from './screens/Ind_user';
import Indpost from './screens/Indpost';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Posts" component={PostsScreen} options={{ title: 'Posts' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{title: 'comments'}} />
        <Stack.Screen name="Induser" component={Induser} options={{headerShown: false}}/>
        <Stack.Screen name="Indpost" component={Indpost} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default MyStack
