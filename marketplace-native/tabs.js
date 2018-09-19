import React from 'react'
import BottomNavContainer from './containers/BottomNavContainer'
import { TabNavigator, TabBarBottom } from 'react-navigation';

const createTabNavigator = (routes) => {

  return new TabNavigator(
    {
        Main: {
            screen: routes,
        },
    },
    {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {

          return <BottomNavContainer navigation={navigation} />

      },
    }),
    tabBarOptions: {
      showLabel:false
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
   }
  )
}

export default createTabNavigator
