import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Bienvenido a la app de xd Compras y Ventas Agroalimentarias</Text>
      <Button
        title="Ver Productos"
        onPress={() => navigation.navigate('ProductScreen')}
      />
    </View>
  );
}

export default HomeScreen;
