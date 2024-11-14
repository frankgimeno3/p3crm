"use client"
import PostAuthNav from '@/app/0components/ui-components/logged/PostAuthNav';
import React, { FC } from 'react';

interface AdminProps {

}

const Admin: FC<AdminProps> = ({ }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <PostAuthNav />
      <div>
        <p>PANEL DE ADMINISTRACIÓN</p>
        <p>aquí sólo pueden acceder los usuarios con permiso</p>
        {/* <p>Ahora mismo, sólo se pueden hacer cosas desde esta vista, más adelante sería hacer subpágina 
        ferias, agentes y listados para ver sin tener que descargar, accediendo desde aquí a las fichas </p> */}

        <div>
          <p>EXPORTAR LISTADO</p>
          <p> Clientes (se extraen en el formato solicitado, con el filtro solicitado) </p>
          {/* <p> Importar datos en csv??? esto quizás sería mejor desde aws directamente</p> */}
        </div>

        <div>
          <p>AGENTES</p>
          <p>Vista de los actuales, con opción de editar y borrar</p>
          <p>Crear nuevo agente</p>
          {/* <p>Sustitución de los clientes de un agente antiguo por uno nuevo (?) o mejor desde aws directo? </p> */}
        </div>

        {/* <div>
        <p>FERIAS</p>
        <div>
        <p>Cada feria es una etiqueta</p>
        <p>Cuando lo implementemos, al hacer click te redirige a perfil completo de feria, debería ser subpágina</p>
        <p>Nombre de la feria</p>
          <p>Fechas</p>
          <p>Lugar</p>
          <p>Iremos?</p>
          <p>Botón para ver todos los detalles</p>
        </div>
      </div> */}
      </div>
    </div>

  );
};

export default Admin;