// src/screens/PedidoScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { usePedidos } from '../context/PedidoContext';  // Importa el contexto

function PedidoScreen({ route, navigation }) {
  const { producto } = route.params;
  const [horaPedido, setHoraPedido] = useState('');
  const { agregarPedido } = usePedidos();  // Obtiene la función para agregar pedidos

  useEffect(() => {
    const currentDate = new Date().toLocaleString();
    setHoraPedido(currentDate);
  }, []);

  const confirmarPedido = () => {
    agregarPedido(producto, horaPedido);  // Agrega el pedido al contexto
    alert(`Pedido confirmado para ${producto.nombre} a las ${horaPedido}`);
    navigation.navigate('VerPedidos');  // Navegar a la pantalla de ver pedidos
  };

  return (
    <View>
      <Text>Pedido de {producto.nombre}</Text>
      <Text>Precio: ${producto.precio}</Text>
      <Text>Hora del pedido: {horaPedido}</Text>

      <Button title="Confirmar Pedido" onPress={confirmarPedido} />
    </View>
  );
}

export default PedidoScreen;
