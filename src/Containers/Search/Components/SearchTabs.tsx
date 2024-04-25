import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { PlaceholderScreen } from '@/Containers/PlaceholderScreen'
import { AuthorList } from './AuthorList'
import { TagsList } from './TagsList'

const Tab = createMaterialTopTabNavigator()

export const MyTabs = (props) => {

  const term = props.Term;
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#265CDF',
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontSize: 16,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: 'transparent',
        },
        tabBarItemStyle: {},
      }}
      
    >
      <Tab.Screen name='Authors' options={{}}>
      {(props)=><AuthorList {...props} Term={term}/>}
      </Tab.Screen>
      
      <Tab.Screen name='Tags' component={TagsList} />
    </Tab.Navigator>
  )
}
