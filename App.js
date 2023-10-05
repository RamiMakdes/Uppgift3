import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const data = [
  {id: '1', name: 'Apelsinjuice'},
  {id: '2', name: 'Banansmoothie'},
  {id: '3', name: 'Cider'},
];

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            {item.name === 'Cider' && (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ReadMore');
                }}
              >
                <Text style={styles.ReadMore}>Read More</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const ReadMore = () => {
  return (
    <View style={styles.ReadMoreContainer}>
    <Text style={styles.ReadMoreText}> Hej Hej! - Rami :D</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='ReadMore' component={ReadMore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    padding: 20,
  },
  itemText: {
    fontSize: 30,
  },
  ReadMoreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  ReadMoreText: {
    fontSize: 50,
    color: 'white',
  },
  ReadMore: {
    color: 'blue',
    marginTop: 10,
  },
});

export default App;