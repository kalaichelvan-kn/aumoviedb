import React, { Component, PureComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Popular } from '../Popular';
import { TopRated } from '../TopRated';
import { Upcoming } from '../Upcoming';
import { MovieDetails } from '../MovieDetails';

const mTab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <mTab.Navigator
      initialRouteName="Popular"
      activeColor="#C70039"
      inactiveColor="#3e2465"
      barStyle={{ 
        backgroundColor: '#DDDDDD', height:'7%', fontWeight:'bold',
        borderTopLeftRadius:15, borderTopRightRadius:15, shadowOffset:4, shadowColor:'black',
       }}
    >
      <mTab.Screen
        name="Popular"
        component={Popular}
        options={{
          tabBarLabel: 'Popular',
          tabBarIcon: ({ color, size }) => (
            <Icon name="users" size={25} color={"black"} Style={{ borderWidth:5, borderColor:'grey'}}/>
          ),
        }}
      />
      <mTab.Screen
        name="TopRated"
        component={TopRated}
        options={{
          tabBarLabel: 'Top Rated',
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" size={27} color={"black"}/>
          ),
        }}
      />
      <mTab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{
          tabBarLabel: 'Upcoming',
          tabBarIcon: ({ color, size }) => (
            <Icon name="clock-o" size={27} color={"black"}/>
          ),
        }}
      />
    </mTab.Navigator>
  );
}

const MyStack = createStackNavigator();


export class AppRoutes extends Component {
    render() {
        return (
              <NavigationContainer>
              <MyStack.Navigator 
                screenOptions={{
                  headerShown: false
                }}
                initialRouteName="Home">
                <MyStack.Screen name="Home" component={MyTabs} />
                <MyStack.Screen name="Details" component={MovieDetails} />
               </MyStack.Navigator>
             </NavigationContainer>
        );
    }
}