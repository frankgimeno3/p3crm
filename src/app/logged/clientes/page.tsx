"use client"
import PostAuthNav from '@/app/0components/ui-components/logged/PostAuthNav';
import React, { FC } from 'react';

interface ClientesProps {
  
}

const Clientes: FC<ClientesProps> = ({ }) => {
  return (
    <div>
                  <div className='flex flex-col min-h-screen'>
                  <PostAuthNav />
        <p>CLIENTES</p>
        <p>Esta no es la vista en detalle de un cliente, es el buscador de clientes</p>
        <p>Hay una barra grande de buscar</p>
        <p>sobre la barra, hay unas pestañas que te permiten seleccionar por el campo que buscas (pe:telefono)</p>
        <p>Abajo, 2 un filtros extra, que te dicen el criterio de ordenación de los datos, y qué datos se muestran</p>
        <p>Por último, te aparecen los datos con coincidencias, ordenados por el criterio elegido</p>
        </div>

    </div>
  );
};

export default Clientes;