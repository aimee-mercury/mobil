import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './SplashScreen';
import GetStarted from './GetStarted';
import Welcome from './Welcome';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { Feather } from 'react-native-vector-icons';
import HomeScreen from '../MovieScreens/TabScreens/HomeScreen';
import ProfileScreen from '../MovieScreens/TabScreens/ProfileScreen';
import SearchScreen from '../MovieScreens/TabScreens/SearchScreen';
import FolderScreen from '../MovieScreens/TabScreens/FolderScreen';
import Action from '../MovieScreens/Action';
import WatchMovie from './WatchMovie';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'HomeScreen') {
            iconName = 'home';
          } else if (route.name === 'SearchScreen') {
            iconName = 'search';
          } else if (route.name === 'FolderScreen') {
            iconName = 'folder';
          } else if (route.name === 'ProfileScreen') {
            iconName = 'user';
          }
          return <Feather name={iconName} style={{ fontSize: 26, color: focused ? '#D9BE52' : '#CACCCE' }} />;
        },
        tabBarStyle: {
          backgroundColor: '#1F2123',
          borderTopColor: '#1F2123',
        },
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tabs.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Tabs.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
      <Tabs.Screen name="FolderScreen" component={FolderScreen} options={{ headerShown: false }} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
    </Tabs.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Here" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="Watchmovie" component={WatchMovie} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Sign-Up" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Sign-In" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Action" component={Action} options={{ headerShown: false }} />
        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MyTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

