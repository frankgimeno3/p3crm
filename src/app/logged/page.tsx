"use client"
import React, { FC } from 'react';
import PostAuthNav from '../0components/ui-components/logged/PostAuthNav';
import { useRouter } from 'next/navigation';

interface InicioProps {

}

const Inicio: FC<InicioProps> = ({ }) => {
  const router = useRouter()
  const handleRedirection = (destination: string)=>{
    router.push(destination)
  }

  
  return (
    <div>
      <div className='flex flex-col min-h-screen'>
        <PostAuthNav />
      </div>
      <p>Bienvenido, X</p>
      <p>Qué deseas hacer?</p>
      <button className=' border border-gray-200 rounded bg-white hover:bg-gray-100 text-gray-500 text-xs h-8 w-24'
        onClick={()=>{handleRedirection('/logged/clientes')}}>
        Gestiones comerciales
      </button>
      <button className=' border border-gray-200 rounded bg-white hover:bg-gray-100 text-gray-500 text-xs h-8 w-24'
        onClick={()=>{handleRedirection('/logged/admin')}}>
        Gestiones de administración
      </button>
    </div>
  );
};

export default Inicio;