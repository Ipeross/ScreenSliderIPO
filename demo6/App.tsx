import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from './src/screens/SettingsScreen';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import MovieListScreen from './src/screens/MovieListScreen';
import MovieListVerticalScreen from './src/screens/MovieListVerticalScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case 'Movie':
                return (
                  <Ionicons
                    name={focused ? 'film' : 'film-outline'}
                    size={size}
                    color={color}
                  />
                );
              case 'Settings':
                return (
                  <Ionicons
                    name={focused ? 'build' : 'build-outline'}
                    size={size}
                    color={color}
                  />
                );
              case 'MovieVertical':
                return (
                  <Ionicons
                    name={focused ? 'videocam' : 'videocam-outline'}
                    size={size}
                    color={color}
                  />
                );
              default:
                return <Ionicons name="bulb" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#444444',
        })}
      >
        <Tab.Screen name="Movie" component={MovieListScreen} options={{ title: 'Películas' }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configuración' }} />
        <Tab.Screen name="MovieVertical" component={MovieListVerticalScreen} options={{ title: 'Películas Formato Vertical' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
