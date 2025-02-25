// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PedidoProvider } from './src/context/PedidoContext';  // Importa el proveedor

import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import PedidoScreen from './src/screens/PedidoScreen';
import VerPedidosScreen from './src/screens/VerPedidosScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PedidoProvider>  {/* Envuelve la app con el PedidoProvider */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ProductScreen" component={ProductScreen} />
          <Stack.Screen name="PedidoScreen" component={PedidoScreen} />
          <Stack.Screen name="VerPedidosScreen" component={VerPedidosScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PedidoProvider>
  );
};

export default App;
