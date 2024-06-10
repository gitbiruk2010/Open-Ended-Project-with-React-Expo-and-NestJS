import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskManager from './src/screens/TaskManager';
import TaskDetails from './src/screens/TaskDetails';
import { TaskProvider } from './src/contexts/TaskContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TaskManager">
          <Stack.Screen name="TaskManager" component={TaskManager} options={{ headerShown: false }} />
          <Stack.Screen name="TaskDetails" component={TaskDetails} options={{ title: 'Task Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
