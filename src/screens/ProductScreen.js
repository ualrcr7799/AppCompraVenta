import React from 'react';
import { View, Text, Button } from 'react-native';

const productos = [
  { id: 1, nombre: 'Tomates', precio: 5 },
  { id: 2, nombre: 'Cebollas', precio: 3 },
  { id: 3, nombre: 'Lechuga', precio: 2 },
];

function ProductScreen({ navigation }) {
  return (
    <View>
      <Text>Lista de Productos Agroalimentarios</Text>
      {productos.map((producto) => (
        <View key={producto.id}>
          <Text>{producto.nombre} - ${producto.precio}</Text>
          <Button
            title="Agregar al carrito"
            onPress={() => navigation.navigate('Pedido', { producto })}
          />
        </View>
      ))}
    </View>
  );
}

export default ProductScreen;
