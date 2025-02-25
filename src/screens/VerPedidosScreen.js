// src/screens/VerPedidosScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { usePedidos } from '../context/PedidoContext';  // Importa el contexto

// Pantalla para ver los pedidos realizados
function VerPedidosScreen() {
  const { pedidosRealizados } = usePedidos();  // Obtiene los pedidos desde el contexto

  return (
    <View>
      <Text>Pedidos Realizados</Text>
      {/* Aquí mostramos los pedidos guardados */}
      {pedidosRealizados.length === 0 ? (
        <Text>No hay pedidos realizados aún.</Text>
      ) : (
        pedidosRealizados.map((pedido, index) => (
          <View key={index}>
            <Text>{pedido.producto.nombre} - {pedido.hora}</Text>
          </View>
        ))
      )}
    </View>
  );
}

export default VerPedidosScreen;
