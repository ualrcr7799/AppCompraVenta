// src/context/PedidoContext.js
import React, { createContext, useState, useContext } from 'react';

// Crea el contexto
const PedidoContext = createContext();

// Hook para usar el contexto
export const usePedidos = () => useContext(PedidoContext);

// Proveedor del contexto
export const PedidoProvider = ({ children }) => {
  const [pedidosRealizados, setPedidosRealizados] = useState([]);

  // Función para agregar un pedido
  const agregarPedido = (producto, hora) => {
    setPedidosRealizados((prevPedidos) => [...prevPedidos, { producto, hora }]);
  };

  return (
    <PedidoContext.Provider value={{ pedidosRealizados, agregarPedido }}>
      {children}
    </PedidoContext.Provider>
  );
};
